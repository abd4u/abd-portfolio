// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Nodemailer transporter configuration
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "mdabdullah.roll.52@gmail.com", // Your Gmail email address
//     pass: "morningb", // Your Gmail password
//   },
// });

// // Route to handle form submission
// app.post("/send-email", (req, res) => {
//   const { name, email, profession, message } = req.body;

//   // Email content
//   const mailOptions = {
//     from: email,
//     to: "mdabdullah.roll.52@gmail.com", // Your email address where you want to receive messages
//     subject: `New message from ${name} (${profession})`,
//     text: message,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send("Internal Server Error");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.send("Email sent successfully!");
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
