const User = require('../../../server/models/user');
var expect = require('chai').expect

describe('User can manage jobs', () => {
let robby;
  beforeEach(() => {
    User.remove({}).exec();
    robby = new User({ username: 'Robby', password: 'Password123', email: 'robby@dore.com' })
  })


  it('should have an array of jobs', () => {
    expect(robby.jobs).to.be.an('array');
  })
  
  it('should add a job with correct params', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    expect(robby.jobs).to.have.lengthOf(1)
    expect(robby.jobs[0].title).to.equal("software developer")
  })

  it('wont create a duplicate job', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
      .catch(err => {
        expect(err).to.equal("User has already saved this")
      })
    expect(robby.jobs).to.have.lengthOf(1)
    expect(robby.jobs[0].title).to.equal("software developer")
  })

  it('should reject is there is missing info', () => {
    robby.addJob("software developer", "BNR", 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    .catch(err => {
      expect(err).to.equal("invalide params")
    })
  })

  it('should be able to delete a job', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    expect(robby.jobs).to.have.lengthOf(1)
    
    robby.deleteJob(134874392)
    expect(robby.jobs).to.have.lengthOf(0)
  })
})
