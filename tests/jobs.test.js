const User = require('../server/models/user');


describe('User can manage jobs', () => {
let robby;
  beforeEach(() => {
    robby = new User({ username: 'Robby', password: 'Password123', email: 'robby@dore.com' })
  })


  it('should have an array of jobs', () => {
    expect(robby.jobs).toBeTruthy();
  })

  // describe('addJob method', () => {
  //
  //   it('should add a job with correct params', => {
  //
  //   })
  // })


})
