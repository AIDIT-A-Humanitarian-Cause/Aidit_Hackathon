const express = require('express')
const {register,login,donate} = require('../controllers/donors')
const router = express.Router()

router.post('/auth/register',register)
router.post('/auth/login',login)
router.post('/donation/:id',donate)

module.exports =router