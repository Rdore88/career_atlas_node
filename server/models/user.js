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
    if (title === undefined || company === undefined || job_key === undefined || longitude === undefined || latitude === undefined || url === undefined) {
      return reject('invalide params')
    }
    if (user.jobs.find(job => job.job_key === job_key)) {
      return reject('User has already saved this')
    }
    let newJob = new Job(title, company, job_key, longitude, latitude, url);
    user.jobs.push(newJob);
    user.save(function (err, user){
      console.log(err);
      if (err) { return reject(err); }
      return resolve({jobs: user.jobs })
    })
  })
}

UserSchema.methods.deleteJob = function(job_key) {
  return new Promise ((resolve, reject) => {
    if (!job_key) {
      return reject(`Invalid param, received: job_key = ${job_key}`)
    }
    let user = this;
    let index = user.jobs.findIndex(job => job.job_key === job_key)
    if (index !== -1) {
      user.jobs.splice(index, 1)
      user.save(function (err, user) {
        if (err) { return reject(err) }
        return resolve({ jobs: user.jobs });
      })
    } else {
      return reject(`user does not have a job with job_key of ${job_key}`)
    }
  })
}

module.exports = mongoose.model('User', UserSchema);
