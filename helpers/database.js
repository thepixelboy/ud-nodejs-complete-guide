const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

require("dotenv").config();

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

module.exports = mongoConnect;
