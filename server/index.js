const express = require('express');
const mongoDB = require('./db/mongo')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { router } = require('./routes/routes.js');
require('dotenv').load();
// const User = mongoose.model('User')

var app = express();
var logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};

// For Dev sake lol
app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.options('*', (req, res) => res.sendStatus(200));

app.use(bodyParser.json())
app.use(logger);
app.use('/', router)


var port = process.env.PORT || 3001
if (require.main === module) {
  app.listen(port, () => console.log(`now listening on ${port}`));
}


module.exports = app;
