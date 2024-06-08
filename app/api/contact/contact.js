// import { createTransport } from "nodemailer";
import nodemailer from "nodemailer";

// Create the transport configuration
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false, // secureConnection is not a valid property, use 'secure'
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

// Function to send a message
export default async function sendMessage({ name, email, tel, msg }) {
  const mailoptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}\nTelephone Number: ${tel ?? "No number given"}`,
  };

  transport.sendMail(mailoptions, (e, info) => {
    if (e) {
      console.error(e);
    } else {
      console.log(info.response);
    }
  });
}

// Function to send a reminder email
export async function sendReminder(email, message, name) {
  const mailoptions = {
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: `Reminder`,
    html: `<!DOCTYPE html>
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
                <a href="http://localhost:3000/dashboard" class="button">View Details</a>
            </div>
            <div class="footer">
                <p>© 2024 Spiritual Awakening. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>`
  };

  transport.sendMail(mailoptions, (e, info) => {
    if (e) {
      console.error(e);
    } else {
      console.log(info.response);
    }
  });
}
