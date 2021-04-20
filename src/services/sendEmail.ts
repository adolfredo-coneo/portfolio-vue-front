"use strict";
import nodemailer from "nodemailer";
import aws from "@aws-sdk/client-ses";
//let aws = require("@aws-sdk/client-ses");

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(
  name: string,
  email: string,
  subject: string,
  messageType: string,
  company: string,
  to: string,
  text: string
) {
  const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "us-east-2",
  });

  // create reusable transporter object using the SES transport
  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  // send some mail
  transporter.sendMail(
    {
      from: name + " " + email, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html: `<b>${name}</b>-<b>${email}</b><br><b>${messageType}</b><br><b>${company}</b><br><b>${text}</b><br>`, // html body
    },
    (err, info) => {
      console.log(info.envelope);
      console.log(info.messageId);
    }
  );
}
