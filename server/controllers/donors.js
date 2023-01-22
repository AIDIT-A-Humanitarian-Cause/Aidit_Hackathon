const { StatusCodes } = require("http-status-codes");
const Donor = require("../models/donors");
const Donation = require("../models/donation");
const CustomAPIError = require("../errors/custom-api");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const login = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  if (username) {
    var donor = await Donor.findOne({ username: username });
    if (!donor) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Cannot find the user with the provided username",
      });
    }
  } else if (email) {
    var donor = await Donor.findOne({ email: email });
    if (!donor) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Cannot find the user with the provided email`,
      });
    }
  }
  if (await donor.comparePassword(password)) {
    const token = await donor.createJwt();
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ success: true, message: "User has Logged In", token: token });
  } else
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "The pasword didnot match" });
};
const register = async (req, res) => {
  const body = req.body;
  const {
    username,
    email,
    password,
    lastName,
    firstName,
    gender,
    country,
    city,
  } = req.body;
  const newDonor = await Donor.create({
    username,
    email,
    password,
    password,
    lastName,
    firstName,
    gender,
    country,
    city,
  });
  console.log("here");
  res
    .status(StatusCodes.ACCEPTED)
    .json({ success: true, message: "User is registered.", donor: newDonor });
};
const donate = async (req, res) => {
  //need  id of particular donation and its creater
  //need id of the one donating{this is taken through jwt}
  const { donatingAmount } = req.body;

  const { id } = req.params;
  const donationToBeFunded = await Donation.findById(id);
  if (!donationToBeFunded)
    throw new CustomAPIError(
      "The donation with the Id doesnot exist.",
      StatusCodes.BAD_REQUEST
    );
  const { nameOfDonation, description, requiredAmount, donatedAmount } =
    donationToBeFunded;
  const maxAmount =
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [
    //     {
    //       name: `${nameOfDonation}`,
    //       description: `${donatedAmount} out of ${requiredAmount}\n ${description} `,
    //       adjustable_quantity:{enabled:true,maximum:},
    //     },
    //   ],
    //   success_url: 'www.google.com',
    //   cancel_url: 'www.google.com',
    //   mode: 'payment',
    // });
    res.status(400).json({
      success: true,
      msg: `${donatingAmount} has been donated to the requested fund Raiser`,
    });
};

module.exports = {
  register,
  login,
  donate,
};
