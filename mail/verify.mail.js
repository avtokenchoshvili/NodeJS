const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function sendMail(data) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: '"๐ val-do.com" <valeri.kharitonashvili@live.com>', // sender address
        to: `${data['email']}`, // list of receivers
        subject: "โ แแแคแแกแขแแก แแแ แแคแแแแชแแ val-do.com", // Subject line
        text: `โ แแฅแแแแ แแแ แแคแแแแชแแแก แแแแแ ${data['verificationCode']}`, // plain text body
        html: `<b>โ แแฅแแแแ แแแ แแคแแแแชแแแก แแแแแ ${data['verificationCode']}</b>`, // html body
    });
}