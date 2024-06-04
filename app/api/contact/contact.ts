// import { createTransport } from "nodemailer";
const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});
export default async function sendMessage({
  name,
  email,
  tel,
  msg,
}: {
  name: string;
  email: string;
  tel?: string;
  msg: string;
}) {
  const mailoptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}\nTelephone Number: ${
      tel ?? "No number given"
    }`,
  };

  await transport.sendMail(mailoptions, (e: any, info: any) => {
    if (e) {
      console.log(e);
    }
    console.log(info.response);
  });
}
export async function sendReminder(email:string, message:string){
  const mailoptions = {
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: `Reminder`,
    text: `${message}`,
  };
}