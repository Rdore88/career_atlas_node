const request = require('supertest');
const Server = require('../../server/index.js');
const User = require('../../server/models/user');
const mongoose = require('mongoose');
var expect = require('chai').expect

before(function() {
    User.remove({}).exec();
})

after(function() {
    User.remove({}).exec();
    mongoose.connection.close();
})

describe("User endpoints", () => {
  let CurrentUser;
    it("should be created", () => {
        return request(Server)
            .post("/api/user/signup")
            .send({ username: "Test", password: "password123", email: "test@test.com" })
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect((res) => {
                CurrentUser = res.body;
                expect(CurrentUser.username).to.equal("Test")
            })
    })
    it("can add a job", () => {
      return request(Server)
        .post("/api/user/jobs")
        .send({
          id: CurrentUser._id, jobParams: {
          title: "software developer",
          company: "cool company",
          job_key: 2345088976,
          longitude: "33.5643",
          latitude: "100.3245",
          url: "www.coolcompany.com"
          }
        })
        .expect(200)
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect((res) => {
          expect(res.body.jobs.length).to.equal(1)
          expect(res.body.jobs[0].url).to.equal("www.coolcompany.com")
        })
    })
})
