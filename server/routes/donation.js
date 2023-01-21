const express = require('express');
const {
  createDonation,
  getDonation,
  getDonations
} = require('../controllers/donation');
const router = express.Router();

router.route('/').post(createDonation).get(getDonations)
router.route('/:id').get(getDonation)
module.exports = router;
