const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

// email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
console.log(process.env.EMAIL);
// console.log(process.env.PASS);
//register user details
router.post('/emailregister', async (req, res) => {
  const {fname, lname, email, mobile, message} = req.body;
  // console.log(fname);
  console.log(req.body);

  if (!fname || !lname || !email || !mobile ) {
    res.status(401).json({ status: 401, error: "All Input require" })
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      preuser.messages.push({ message: message });
      await preuser.save();
      const userMessage = await preuser.Messagesave(message);
      console.log("already exist")
      console.log(userMessage);
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "This email is from Rupesh Gupta regarding Job and Opportunities",
        text: "Greetings, Rupesh at your service! I am delighted to inform you that your response has been successfully submitted. Your cooperation is greatly appreciated. Thank you for your valuable input!",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error" + error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent SUccesfully" });
        }
      });
    } else {
      const finalUser = new users({
        fname,
        lname,
        email,
        mobile,
        messages: { message: message },
      });

      const storeData = await finalUser.save();

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "This email is from Rupesh Gupta regarding Job and Opportunities",
        text: "Greetings, Rupesh at your service! I am delighted to inform you that your response has been successfully submitted. Your cooperation is greatly appreciated. Thank you for your valuable input!",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error" + error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent Succesfully" });
        }
      });
      res.status(201).json({ status: 201, storeData });
    }
  } 

  catch (error) {
    res.status(401).json({ status: 401, error: "All Input require" });
    console.log("catch errror");
  }
});

module.exports = router;
