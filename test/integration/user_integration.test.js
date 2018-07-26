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
    it("should be created", () => {
        return request(Server)
            .post("/api/user/signup")
            .send({ username: "Test", password: "password123", email: "test@test.com" })
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect((res) => {
                let user = res.body;
                expect(user.username).to.equal("Test")
                
            })
    })
})    
