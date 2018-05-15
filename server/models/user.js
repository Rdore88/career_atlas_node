const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
console.log("connected");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  jobs: {
    type: Array,
    default: []
  }
})

UserSchema.pre('save', function(next) {
  let user = this;
  bcrypt.hash(user.password, null, null, function(error, hash) {
    if (error) { return next(error); }
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', UserSchema);
