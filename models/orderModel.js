const { getDb } = require("../utils/db");
const { ObjectId } = require("mongodb");

class Order {
  static addOrder(userId, cartItems) {
    const db = getDb();

    const order = {
      userId: new ObjectId(userId),
      items: cartItems,
      createdAt: new Date(),
    };

    return db.collection("orders").insertOne(order);
  }

  static getOrdersByUser(userId) {
    const db = getDb();

    return db
      .collection("orders")
      .find({ userId: new ObjectId(userId) })
      .toArray();
  }
}

module.exports = Order;
