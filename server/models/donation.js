const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  startedOrCreatedBy: {
    type: mongoose.Types.ObjectId,
    ref: "institution",
    required: true,
  },
  nameOfDonation: {
    type: String,
    required: true,
  },
  requiredAmount: {
    type: Number,
    required: true,
  },
  donatedAmount: {
    type: Number,
    default: 0,
  },
  nameOfPateint: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  nameOfCondition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  documents: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
  currency: {
    type: String,
    enum: ["usd", "nrs"],
    required: true,
  },
});

module.exports = mongoose.model("donation", donationSchema);
