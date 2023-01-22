const express = require('express')
const {register,login,donate,getDonations,exploreDonations} = require('../controllers/donors')
const router = express.Router()
const webhook = require('../config/webhook_stripe')
const { doesNotMatch } = require('assert')
const donors = require('../models/donors')
router.post('/auth/register',register)
router.post('/auth/login',login)
router.post('/donation/:id',donate)
router.post('/webhook',webhook)
router.get('/',getDonations)
router.get('/exploreDonation', exploreDonations);



module.exports =router