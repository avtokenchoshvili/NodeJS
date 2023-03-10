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
        subject: "๐ แแแ แแแแก แแฆแแแแแ - val-do.com", // Subject line
        text: `๐ แแแ แแแแก แแฆแกแแแแแแแ แแแฎแแแ แแแแแฎแแแแแ แแแฃแแแ ${process.env.HOST}/set-password?email=${data['email']}&token=${data['token']}`, // plain text body
        html: `๐  แแแ แแแแก แแฆแกแแแแแแแ แแแฎแแแ แแแแแฎแแแแแ แแแฃแแแ <br> <a href="${process.env.HOST}/set-password?email=${data['email']}&token=${data['token']}">${process.env.HOST}/set-password?email=${data['email']}&token=${data['token']}</a>`, // html body
    });
}