require('dotenv').config()
const mongoose = require('mongoose');
const UserSchema = require('../models/user')
const nodeEnv = process.env.NODE_ENV;
const Mongo = require('./config.js')["mongo"];

mongoose.connect(Mongo[nodeEnv])

var db = mongoose.connection;

db.on('connected', () => {
  console.log('conencted to db', process.env.NODE_ENV);
})

db.on('error', (error) => {
  console.log(error);
})

module.exports = {
db,
}
