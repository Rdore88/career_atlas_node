const express = require('express');
const mongoDB = require('./db/mongo')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { router } = require('./routes/routes.js');
// const User = mongoose.model('User')

var app = express();
var logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};

app.use(bodyParser.json())
app.use(logger);
app.use('/', router)

var port = process.env.port || 3001
app.listen(port, () => console.log(`now listening on ${port}`));
