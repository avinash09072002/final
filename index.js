const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.post('/', function(req, res){
  var num1= req.body.num1;
  var num2= req.body.num2;
  var num3= req.body.num3;
  var num4= req.body.num4;


  res.send('thank you for contacting us');

  async function main() {

    let testAccount = await nodemailer.createTestAccount();


    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'avinashdharmshale312@gmail.com', // generated ethereal user
        pass: 'avinashdh@s12345', // generated ethereal password
      },
    });


    let info = await transporter.sendMail({
      from: '"Avinash Dharmshale 👻" <avinashdharmshale312gmail.com>', // sender address
      to: "pruthvirajmali120@gmail.com, tejasmaske2002@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: num1+ ' ' + num2+ ' ' +num3+ ' '+num4, // plain text body

    });

    console.log("Message sent: %s", info.messageId);


    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  }

  main().catch(console.error);
});


app.listen(3000, function(){
  console.log("Running on port 3000...");
});
