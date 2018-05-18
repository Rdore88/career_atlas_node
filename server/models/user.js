const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Job } = require('./job')

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

UserSchema.methods.addJob = function(title, company, job_key, longitude, latitude, url) {
  return new Promise((resolve, reject) => {
    let user = this;
    console.log(user);
    if (title === undefined || company === undefined || job_key === undefined || longitude === undefined || latitude === undefined || url === undefined) {
      return reject('invalide params')
    }
    console.log("got here");
    if (user.jobs.find(job => job.job_key === job_key)) {
      return reject('User has already saved this')
    }
    console.log("got past this shit");
    let newJob = new Job(title, company, job_key, longitude, latitude, url);
    console.log(newJob);
    user.jobs.push(newJob);
    user.save(function (err, user){
      console.log(err);
      if (err) { return reject(err); }
      return resolve({jobs: user.jobs })
    })
  })
}

module.exports = mongoose.model('User', UserSchema);
