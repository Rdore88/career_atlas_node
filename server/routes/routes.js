const router = require('express').Router();
const controllers = require('../controllers')

//User CRUD routes
router.post('/api/user/signup', controllers.users.createUser);
router.get('/api/user', controllers.users.getUser)
router.delete('/api/user/delete', controllers.users.deleteUser);

// Managing job routes
router.post('/api/user/jobs', controllers.jobs.saveJob)
router.delete('/api/user/delete/job', controllers.jobs.deleteJob)

//Indeed routes
router.get('/api/jobs/searchAll', controllers.indeed.searchAll)

module.exports = {
  router,
}
