const axios = require('axios');

const express = require('express');
require('dotenv').config();
require('express-async-errors');

const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT;
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
});

const donorRouter = require('./routes/donors');
const institutionRouter = require('./routes/institution');
const donationRouter = require('./routes/donation');
const connect = require('./config/db.js');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authMiddleWare = require('./middleware/authenitcation.js');
app.use(
  express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rateLimiter);
app.use(cors());
app.use(helmet());
app.use('/donor', donorRouter);
app.use('/auth/institution', institutionRouter);
app.use('/donation', authMiddleWare, donationRouter);

app.post('/sms', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const value = [...phoneNumber];
    const commaSeperatedValue = value.join(',');
    console.log(commaSeperatedValue);
    console.log(process.env.SPARROW_TOKEN);
    console.log(process.env.IDENTITY);
    const response = await axios(
      'http://api.sparrowsms.com/v2/sms/',
      (params = {
        token: 'v2_mKsyKwullsuMj7csK9N95bCsn2D.dwYE',
        from: process.env.IDENTITY,
        to: commaSeperatedValue,
        text: 'Ishan fuchhe',
      })
    );
    res.status(200).json({ msg: 'ddone' });
  } catch (error) {
    console.log(error)

  }
});

app.use('*', (req, res) => {
  res.status(404).send('<h1>Not Found</h1>');
});

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port : ${PORT}`)
    );
  } catch (error) {
    console.log(`Error Occured: ${error}`);
  }
};
start();
