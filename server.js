const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const RestaurantSchema = require('./models/restaurant');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dvorian:zxcasdqwe@restogram-jqkte.mongodb.net/Restogram?retryWrites=true',  { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind (console, 'connection error:'));
const Restaurants = mongoose.model('restourants', RestaurantSchema);

app.post('/getRestourants', (req, res)=> {
  Restaurants.find({}).then( (restourants) => {
    res.status(200).json(restourants)
  })
})

app.post('/book', (req, res)=> {
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "together0chat@gmail.com",
      pass: "qweasdzxc01"
    }
  });

  let mailOptions = {
    to: req.body.email,
    subject: "Заявка на бронювання",
    html: `Доброго дня!<br>З сервісу Restogram надійшла заявка на бронювання:<br>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <table class="tg" style="undefined;table-layout: fixed; width: 297px">
    <colgroup>
    <col style="width: 143px">
    <col style="width: 154px">
    </colgroup>
      <tr>
        <td class="tg-0pky">Ім'я та прізвище</th>
        <td class="tg-0lax">${req.body.name}</th>
      </tr>
      <tr>
        <td class="tg-0pky">Дата:</td>
        <td class="tg-0lax">${req.body.date}</td>
      </tr>
      <tr>
        <td class="tg-0lax">Час:</td>
        <td class="tg-0lax">${req.body.time}</td>
      </tr>
      <tr>
        <td class="tg-0lax">Кількість гостей:</td>
        <td class="tg-0lax">${req.body.quantity}</td>
      </tr>
      <tr>
        <td class="tg-0lax">Телефон:</td>
        <td class="tg-0lax">${req.body.phone}</td>
      </tr>
    </table>`
  };

  smtpTransport.sendMail(mailOptions);

})

app.post('/newRestaurant', (req, res)=> {
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "together0chat@gmail.com",
      pass: "qweasdzxc01"
    }
  });

  let mailOptions = {
    to: 'together0chat@gmail.com',
    subject: "Заявка на додавання нового ресторану",
    html: `Доброго дня!<br>Вам надійшла заявка на реєстрацію нового ресторану<br>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <table class="tg" style="undefined;table-layout: fixed; width: 297px">
    <colgroup>
    <col style="width: 143px">
    <col style="width: 154px">
    </colgroup>
      <tr>
        <td class="tg-0pky">Ім'я:</th>
        <td class="tg-0lax">${req.body.name}</th>
      </tr>
      <tr>
        <td class="tg-0pky">Назва закладу:</td>
        <td class="tg-0lax">${req.body.restaurant}</td>
      </tr>
      <tr>
        <td class="tg-0lax">Телефон:</td>
        <td class="tg-0lax">${req.body.phone}</td>
      </tr>
      <tr>
        <td class="tg-0lax">E-mail:</td>
        <td class="tg-0lax">${req.body.email}</td>
      </tr>
    </table>`
  };

  smtpTransport.sendMail(mailOptions);

})

app.listen(5000, () => console.log(`Listening on port 5000`));
