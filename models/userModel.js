const { getDb } = require("../utils/db");
const { ObjectId } = require("mongodb");

class User {
  // DELETE ITEM FROM CART
  static deleteItemFromCart(userId, prodId) {
    const db = getDb();

    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        const updatedCartItems = user.cart.items.filter((item) => {
          return item.productId.toString() !== prodId.toString();
        });

        return db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(userId) },
            { $set: { "cart.items": updatedCartItems } },
          );
      });
  }

  // CLEAR CART
  static clearCart(userId) {
    const db = getDb();

    return db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: { "cart.items": [] } });
  }
}

module.exports = User;
