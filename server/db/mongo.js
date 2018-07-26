require('dotenv').config()
const mongoose = require('mongoose');
const UserSchema = require('../models/user')
const nodeEnv = process.env.NODE_ENV;
const config = require('./config.json')[nodeEnv];
console.log(config.mongoURL);

mongoose.connect(config.mongoURL)

var db = mongoose.connection;

db.on('connected', () => {
  console.log('conencted to db');
})

db.on('error', (error) => {
  console.log(error);
})

module.exports = {
db,
}
