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

const getUser = (req, res) => {
  User.find({_id: req.query.id}, (err, user) => {
    if (err) { res.send(err) }
    res.send(user)
  })
}

const deleteUser = (req, res) => {
  User.deleteOne({_id: req.body.id}, function(err){
    if (err) {
      res.send(err)
    } else {
      res.send('deleted')
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
