const nodemailer = require("nodemailer");
const transport =  nodemailer.createTransport({
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
})
function generateSixDigitCode(): string {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code.toString();
  }
  

export  const emailCode = generateSixDigitCode();

  
export async function verifyUser(email:string){
  transport.sendMail({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: `Verify your mail to continue to bible app`
  })
}