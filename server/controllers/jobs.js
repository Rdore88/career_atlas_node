const mongoose = require('mongoose');
const User = mongoose.model('User');

//check into using session so req.user is a thing
const saveJob = (req, res) => {
  User.findOne({ _id: req.body.id }, 'name jobs', function(err, user) {
    if (!user) {
      return res.send("couldn't find user")
    } else {
      let { title, company, job_key, longitude, latitude, url } = req.body.jobParams
      user.addJob(title, company, job_key, longitude, latitude, url)
      .then(data => res.send(data))
      .catch(err => res.send(err))
    }
  })
}

module.exports = {
  saveJob,
}
