const nodemailer = require('nodemailer');
const config = require('config');

//Pull email username and password from config server
const username = config.get('username');
const password = config.get('password');

//Test code - uses mailtrap to send emails to a dummy mailbox
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: username,
    pass: password
}
});

function verify(req, res) {
    transport.verify((error, success) => {
        if (error) {
            console.log(error);
            res.statusCode = 500;
            res.end("False");
        } else {
            console.log("Successful");
            res.statusCode = 200;
            res.end("True");
        }
    })
}

function sendEmail(req, res) {

    const requestBody = req.body;

    message = {
        from: "homepage",
        to: "austin.lowder.dev@mail.com",
        subject: "[Message from Homepage] " + requestBody.subject,
        text: requestBody.emailBody
    }

    transport.sendMail(message, (err, info) => {
        if(err) {
            console.log(err)
            res.statusCode = 500;
            res.end("Error sending message: " + err);
        } else {
            console.log(info)
            res.statusCode = 200;
            res.end("Message Sent!")
        }
    })
}

module.exports = {
    verify,
    sendEmail
}

// //#####################################################################################################
// //This is just the connection object - this code is not ready for production. Need to find a way to externalize my creds here
// const stmpConfig = {
//     service : 'gmail',
//     auth: {
//       user: "",
//       pass: "",
//     },
//   }
// //#####################################################################################################

// const transport = nodemailer.createTransport(stmpConfig)
