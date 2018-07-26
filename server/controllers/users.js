const mongoose = require('mongoose');
const User = mongoose.model('User');


const createUser = (req, res) => {
  
  let user = new User(req.body)
  user.save()
  .then(user => {
    res.send(user)
  })
  .catch(error => {
    res.send(error)
  })
}
//check into using session so req.user is a thing
//also change this to req.body for now
const getUser = (req, res) => {
  User.findOne({_id: req.query.id}, 'username jobs', function(err, user) {
    if (!user) {
      return res.send("couldn't find user")
    }
    res.send(user)
  })
}

const deleteUser = (req, res) => {
  User.deleteOne({_id: req.body.id}, function(err, prod){
    if (err) {
      res.send(err)
    } else {
      res.send(prod)
    }
  })
}

const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) { res.send(err) }
    res.send(users)
  })
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
}
