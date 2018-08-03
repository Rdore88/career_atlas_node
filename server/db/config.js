require('dotenv').config()
const mongo = {
  development: "mongodb://localhost/CareerAtlasBackend",
  test: "mongodb://localhost/CareerAtlasBackend_Test",
  production: process.env.MONGODB_URI,
};

module.exports = {
  mongo
}
