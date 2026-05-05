const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://127.0.0.1:27017/kirandb")
    .then((client) => {
      console.log("Connected to MongoDB");
      _db = client.db(); // similar to selecting DB
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (!_db) {
    throw "No database found!";
  }
  return _db;
};

module.exports = {
  mongoConnect,
  getDb,
};
