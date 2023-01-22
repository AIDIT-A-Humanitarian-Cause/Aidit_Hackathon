const donation = require("../models/donation");
const Donation = require("../models/donation");
const createDonation = async (req, res) => {
  const startedOrCreatedBy = req.user.userId;
  const {
    nameOfDonation,
    requiredAmount,
    nameOfPateint,
    age,
    nameOfCondition,
    description,
    documents,
    currency,
  } = req.body;
  const newDonation = await Donation.create({
    nameOfDonation,
    requiredAmount,
    nameOfPateint,
    age,
    nameOfCondition,
    description,
    documents: documents.split(" "),
    currency,
    startedOrCreatedBy,
  });
  res
    .status(400)
    .json({ success: true, msg: "Donation Created.", donation: newDonation });
};

const getDonation = async (req, res) => {
  const { id } = req.params;
  const idOfCreater = req.user.userId;
  console.log(idOfCreater);
  const donation = await Donation.findOne({ _id: id });
  res.status(400).json({ success: true, donation: donation });
};
const getDonations = async (req, res) => {
  const idOfCreater = req.user.userId;
  const donations = await Donation.find({ startedOrCreatedBy: idOfCreater });
  res.status(400).json({ success: true, donations: donations });
};
module.exports = {
  createDonation,
  getDonation,
  getDonations,
};
