const axios = require('axios');
const { send } = require('process');
require('dotenv').config();
const sendSms = async (phoneNumber, msg) => {
  try {
    const response = await axios.post(
      'http://api.sparrowsms.com/v2/sms/',
      (params = {
        token: 'v2_mKsyKwullsuMj7csK9N95bCsn2D.dwYE',
        from: 'TheAlert',
        to: phoneNumber,
        text: msg,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendSms
