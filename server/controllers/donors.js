const { StatusCodes } = require("http-status-codes");
const Donor = require("../models/donors");
const Donation = require("../models/donation");
const CustomAPIError = require("../errors/custom-api");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const trx = require("../models/donationTrx");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, email, password } = req.body;
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
        message: "Cannot find the user with the provided email",
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
  const newDonor = new Donor({
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
  newDonor.save();
  res
    .status(StatusCodes.ACCEPTED)
    .json({ success: true, message: "User is registered." });
};
const donate = async (req, res) => {
  //need  id of particular donation and its creater
  //need id of the one donating{this is taken through jwt}
  // const token = req.header
  const authHeader = req.headers.authorization;
  let donorId;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token sent", StatusCodes.UNAUTHORIZED);
  }
  console.log("her");
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    donorId = decoded.id;
  } catch (error) {
    throw new CustomAPIError(error.message, StatusCodes.UNAUTHORIZED);
  }
  console.log("here");

  const { donatingAmount } = req.body;
  const { id } = req.params;
  const donationToBeFunded = await Donation.findById(id);
  if (!donationToBeFunded)
    throw new CustomAPIError(
      "The donation with the Id doesnot exist.",
      StatusCodes.BAD_REQUEST
    );
  const { nameOfDonation, description, requiredAmount, donatedAmount, _id } =
    donationToBeFunded;
  console.log(donationToBeFunded);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${nameOfDonation}`,
            description: `${donatedAmount} out of ${requiredAmount} \n
             ${description}`,
            images: [
              "https://www.shutterstock.com/image-photo/dhaka-bangladesh-january-2020-daily-260nw-1855368253.jpg",
            ],
          },
          unit_amount: parseFloat(+donatingAmount.toString()),
        },
        quantity: 1,
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    success_url: "http://localhost:3000/success",
    cancel_url: "https://www.google.com/gmail/",
    mode: "payment",
  });
  const amountInDollar = parseFloat(+donatingAmount.toString()) / 100;
  const newTrx = await trx.create({
    id: session.id,
    donorId: donorId,
    donationId: _id,
    amount: amountInDollar,
    name: nameOfDonation,
  });
  return res.status(200).json({
    success: true,
    msg: `${donatingAmount} has been donated to the requested fund Raiser`,
    trx: newTrx,
    url: session.url,
  });
};
const getDonations = async (req, res) => {
  const authHeader = req.headers.authorization;
  let donorId;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token sent", StatusCodes.UNAUTHORIZED);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    donorId = decoded.id;
  } catch (error) {
    throw new CustomAPIError(error.message, StatusCodes.UNAUTHORIZED);
  }

  const allDonations = await trx.find({ donorId });
  res.status(200).json({
    success: true,
    donations: allDonations,
    length: allDonations.length,
  });
};
const exploreDonations = async (req, res) => {
  const authHeader = req.headers.authorization;
  let donorId;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token sent", StatusCodes.UNAUTHORIZED);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    donorId = decoded.id;
  } catch (error) {
    throw new CustomAPIError(error.message, StatusCodes.UNAUTHORIZED);
  }

  const donation = await Donation.find({});
  res.status(StatusCodes.ACCEPTED).json({
    success: true,
    dataLength: donation.length,
    data: donation,
  });
};
module.exports = {
  register,
  login,
  donate,
  getDonations,
  exploreDonations,
};
