const stripe = require('stripe');
const trx = require('../models/donationTrx');
const Donation = require('../models/donation');
const Donor = require('../models/donors');

const sendSms = require('../config/sendSms');
require('dotenv').config();
const webhook = async (req, res) => {
  try {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req['rawBody'],
        sig,
        process.env.WEB_HOOK
      );
    } catch (error) {
      return res.status(400).send(`WebHook Error ${error.message}`);
    }
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const trxId = session.id;

      if (session.status == 'complete') {
        const trxDone = await trx.findOne({ id: trxId });
        trxDone.status = true;
        const phoneNumber = session.customer_details.phone
        console.log(phoneNumber)
        const donationDone = await Donation.findById(trxDone.donationId);
        const donor = await Donor.findById(trxDone.donorId);
        donor.updateAmount(trxDone.amount);
        const amountDonatedInFloat = parseFloat(+trxDone.amount.toString());
        const totalDonatedAmount = parseFloat(
          +donationDone.donatedAmount.toString()
        );
        const amountAfterDonation = amountDonatedInFloat + totalDonatedAmount;
        donationDone.donatedAmount = amountAfterDonation;
        await donor.save();
        await donationDone.save();
        await trxDone.save();
        const msg = `Thank you for Donating.\nThis donation will go on to save a life of a child.\n You have donated $${amountDonatedInFloat} to fund ${donationDone.nameOfDonation}
        `;
        sendSms(phoneNumber,msg)
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = webhook;
