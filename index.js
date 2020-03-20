"use strict";

//webserver
const express = require('express');
const app = express();

const config = require('config');

//send mails
const nodemailer = require("nodemailer");

//to parse form-data etc
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

//for parsing application/json
app.use(bodyParser.json());
//for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//for parsing multipart/form-data
app.use(upload.array());

//static files
app.use('/projects', express.static('_site/projects.html'));
app.use(express.static('_site', {'extensions': ['html']}));

//transporter to send mails
const transporter = nodemailer.createTransport({
  host: config.get("email.host"),
  port: config.get("email.port"),
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.get("email.user"), // generated ethereal user
    pass: config.get("email.pass") // generated ethereal password
  }
});

app.post('/contact', function(req, res) {
  if (req.body.ansprechpartner
      && req.body.email
      && req.body.nachricht
      && req.body["rights-checkbox"]) {
    let sender = '"' + req.body.ansprechpartner + '" <' + req.body.email + '>';

    if (req.body.unternehmen) {
      sender = '"' + req.body.ansprechpartner + ' @ ' + req.body.unternehmen + '" <' + req.body.email + '>';
    }

    transporter.sendMail({
      from: '"' + req.body.ansprechpartner + '" <' + req.body.email + '>',
      to: "info@legarti.de",
      subject: "Kontaktformular - legarti.agency",
      text: req.body.nachricht
    }).then(info => {
      console.log("Message sent: %s", info.messageId);
      res.sendStatus(200);
    }).catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(400);
  }
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  console.log("* route");
  res.status(404).sendFile('404.html', { root: path.join(__dirname, '_site') });;
});

app.listen(config.get("app.port"), () => console.log('Server listening on port' + config.get("app.port")));
