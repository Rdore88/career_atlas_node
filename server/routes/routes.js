const router = require('express').Router();
const controllers = require('../controllers')

//User CRUD routes
router.post('/api/user/signup', controllers.users.createUser);
router.get('/api/user', controllers.users.getUser)

//For development only!
router.get('/api/allusers', controllers.users.getAllUsers)

module.exports = {
  router,
}
