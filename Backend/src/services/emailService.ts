import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (
  to: string,
  name: string,
  company: string,
  template: string
) => {
  const transportConfig = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  console.log("Transport Config:", transportConfig);
  console.log("Sending email to:", to);

  const transporter = nodemailer.createTransport(transportConfig);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Welcome to our platform!",
    text: template.replace("{name}", name).replace("{company}", company),
  };

  await transporter.sendMail(mailOptions);
};
