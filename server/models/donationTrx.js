const mongoose = require('mongoose');

const trxSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  donorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  donationId: {
    type: mongoose.Types.ObjectId,
    ref: 'donation',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  dateCreated:{
    type:Date,
    default:Date.now()
  },
  name:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('trx', trxSchema);
