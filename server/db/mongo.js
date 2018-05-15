const mongoose = require('mongoose');
const UserSchema = require('../models/user')
mongoose.connect('mongodb://localhost/CareerAtlasBackend')

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
