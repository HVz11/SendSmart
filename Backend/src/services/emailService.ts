import nodemailer from "nodemailer";

export const sendEmail = async (
  to: string,
  name: string,
  company: string,
  template: String
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Welcome to our platform!",
    text: template.replace("{name}", name).replace("{company}", company),
  };

  await transporter.sendMail(mailOptions);
};
