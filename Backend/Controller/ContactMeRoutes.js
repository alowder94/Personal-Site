// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// //#####################################################################################################
// //This is just the connection object - this code is not ready for production. Need to find a way to externalize my creds here
// const stmpConfig = {
//     service : 'gmail',
//     auth: {
//       user: "", //Email address goes here
//       pass: "", //Password for this email goes here - for gmail needs to be application specific password
//     },
//   }
// //#####################################################################################################

// const transporter = nodemailer.createTransport(stmpConfig)


// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Successful");
//     }
//     }
// )

// module.exports = router;