import nodemailer from 'nodemailer'
import {Request, Response} from 'express'

//Pull email username and password from config server
const username = process.env.USERNAME
const password = process.env.PASSWORD

//Test code - uses mailtrap to send emails to a dummy mailbox
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: username,
    pass: password
}
});

export function verify(req: Request, res: Response) {
    transport.verify((error, success) => {
        if (error) {
            console.log(error);
            res.statusCode = 500;
            res.end("False");
        } else {
            res.statusCode = 200;
            res.end("True");
        }
    })
}

export function sendEmail(req: Request, res: Response) {

    const requestBody = req.body;

    const message = {
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
