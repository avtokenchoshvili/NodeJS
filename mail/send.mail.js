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
        from: '"đ val-do.com" <valeri.kharitonashvili@live.com>', // sender address
        to: `valeri.kharitonashvili1@gmail.com`, // list of receivers
        subject: "đĽ ááŽááá áááááá˘áá á", // Subject line
        text: `ááááŽááá áááááá áááŹáá á ááŽááá áááááá˘áá á`, // plain text body
        html: `<a href="https://val-do.com/lessons/${data['courseId']}">áááááá˘áá ááĄ áááŁáá</a> <br/> ${data['comment']}`, // html body
    });
}