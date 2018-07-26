const User = require('../../../server/models/user');
var expect = require('chai').expect

describe('User', () => {

    it('requires a username, password and email', () => {
        let user = new User();
        user.validate(err => {
            expect(err.errors.username.message).to.equal('Path `username` is required.');
            expect(err.errors.password.message).to.equal('Path `password` is required.');
            expect(err.errors.email.message).to.equal('Path `email` is required.');
        })
    })

    it('adds a user with all required info', () => {
        let user = new User({ username: "Robby2", email: "robby2@robby2.com", password: "password123" });
        user.save
        User.find({}, (err, users) => {
            expect(users).to.have.lengthOf(1)
        })
    })
})