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
  let data = {
    name, email, tel, msg
  }
const res = await fetch("https://unable-tana-chobyayo-ca985f68.koyeb.app/",{
    method:"POST", 
    headers: {
        "Content-Type": "application/json",
      },
    body:JSON.stringify(data)
})
}

// Function to send a reminder email
export async function sendReminder(emails, message,  names) {
  const res = await fetch("https://unable-tana-chobyayo-ca985f68.koyeb.app/reminder", {
    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
    body:JSON.stringify({emails, message, names}),
    cache:"no-cache"
  })
  if(res.ok){
    return (await res.json());
  }
}
