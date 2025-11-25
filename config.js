/* eslint-env node */

import dotenv from "dotenv";
dotenv.config(); // Load .env variables

export const emailConfig = {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
  to: process.env.EMAIL_TO || "sustienergyslns@gmail.com",
};
