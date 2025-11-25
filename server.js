/* eslint-env node */
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const { emailConfig } = require("./config"); // CommonJS
const app = express();

// Middleware
app.use(express.json());

// Contact endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: "error", message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
    });

    await transporter.sendMail({
      from: emailConfig.user,
      to: emailConfig.to,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.json({ status: "ok", message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", message: "Failed to send message." });
  }
});

// Serve React build
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));
app.get("*", (req, res) => res.sendFile(path.join(buildPath, "index.html")));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
