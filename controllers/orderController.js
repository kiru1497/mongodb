const Order = require("../models/orderModel");
const User = require("../models/userModel");

// PLACE ORDER
exports.postOrder = (req, res, next) => {
  const userId = req.user._id;

  // 1. Get user cart
  User.findUserById(userId)
    .then((user) => {
      const cartItems = user.cart.items;

      // 2. Save to orders
      return Order.addOrder(userId, cartItems);
    })
    .then(() => {
      // 3. Clear cart
      return User.clearCart(userId);
    })
    .then(() => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};

// GET ORDERS (console log)
exports.getOrders = (req, res, next) => {
  const userId = req.user._id;

  Order.getOrdersByUser(userId)
    .then((orders) => {
      console.log("User Orders:", orders);
      res.render("orders", { orders: orders });
    })
    .catch((err) => console.log(err));
};
