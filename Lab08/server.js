const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');


app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));


app.get('/hello', (req, res) => res.send("hello world!"));


app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});


app.post('/formdata', (req, res) => {
  console.log(req.body);
  res.render('formdata', req.body);
});


app.use(bodyParser.json());


app.post('/jsondata', (req, res) => {
    console.log(req.body);
    res.render('formdata', req.body);
});


app.listen(3000, () => console.log("Server started...  "));