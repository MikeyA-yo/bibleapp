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
export async function sendReminder(email:string, message:string, name:string){
  const mailoptions = {
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: `Reminder`,
    html:` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reminder Email</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f7f7f7;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border: 1px solid #dddddd;
                border-radius: 8px;
                overflow: hidden;
            }
            .header {
                background-color: #007BFF;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 20px;
            }
            .footer {
                background-color: #f1f1f1;
                color: #666666;
                text-align: center;
                padding: 10px;
                font-size: 12px;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                color: #ffffff;
                background-color: #28a745;
                border-radius: 5px;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>${message}</h1>
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                <p>This is a friendly reminder about your weekly/daily Bible reading task. Please make sure to complete it Today.</p>
                <p>God bless you!</p>
                <a href="" class="button">View Details</a>
            </div>
            <div class="footer">
                <p>© 2024 Spiritual Awakening. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>`
  };

   transport.sendMail(mailoptions, (e:any, info:any)=>{
    if (e) {
      console.log(e);
    }
    console.log(info.response);
  })
}