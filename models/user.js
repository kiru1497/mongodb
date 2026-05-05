const { getDb } = require("../utils/db");
const { ObjectId } = require("mongodb");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // CREATE
  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  // READ (all)
  static fetchAll() {
    const db = getDb();
    return db.collection("users").find().toArray();
  }

  // READ (by ID)
  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next();
  }

  // UPDATE
  static updateById(userId, updatedData) {
    const db = getDb();
    return db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: updatedData });
  }

  // DELETE
  static deleteById(userId) {
    const db = getDb();
    return db.collection("users").deleteOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
