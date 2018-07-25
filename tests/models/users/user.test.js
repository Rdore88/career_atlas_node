const User = require('../../../server/models/user');

describe('User', () => {

    it('requires a username, password and email', () => {
        let user = new User();
        user.validate(err => {
            expect(err.errors.username.message).toBe('Path `username` is required.');
            expect(err.errors.password.message).toBe('Path `password` is required.');
            expect(err.errors.email.message).toBe('Path `email` is required.');
        })
    })

    it('adds a user with all required info', () => {
        let user = new User({ username: "Robby", email: "robby@robby.com", password: "password123" });
        user.save
        User.find({}, (err, users) => {
            expect(users).toHaveLength(1)
        })
    })
})