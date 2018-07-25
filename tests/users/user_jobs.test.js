const User = require('../../server/models/user');


describe('User can manage jobs', () => {
let robby;
  beforeEach(() => {
    robby = new User({ username: 'Robby', password: 'Password123', email: 'robby@dore.com' })
  })


  it('should have an array of jobs', () => {
    expect(robby.jobs).toBeTruthy();
    expect(Array.isArray(robby.jobs)).toBe(true);
  })
  
  it('should add a job with correct params', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    expect(robby.jobs).toHaveLength(1)
    expect(robby.jobs[0].title).toBe("software developer")
  })

  it('wont create a duplicate job', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
      .catch(err => {
        expect(err).toBe("User has already saved this")
      })
    expect(robby.jobs).toHaveLength(1)
    expect(robby.jobs[0].title).toBe("software developer")
  })

  it('should reject is there is missing info', () => {
    robby.addJob("software developer", "BNR", 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    .catch(err => {
      expect(err).toBe("invalide params")
    })
  })

  it('should be able to delete a job', () => {
    robby.addJob("software developer", "BNR", 134874392, 33.759141, -84.331937, "https://www.bignerdranch.com/about/careers/")
    expect(robby.jobs).toHaveLength(1)
    
    robby.deleteJob(134874392)
    expect(robby.jobs).toHaveLength(0)
  })
})
