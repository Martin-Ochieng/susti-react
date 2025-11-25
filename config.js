/* eslint-env node */
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const emailConfig = {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
  to: process.env.EMAIL_TO || "sustienergyslns@gmail.com",
};

module.exports = { emailConfig };
