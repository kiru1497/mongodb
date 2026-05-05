const User = require("../models/userModel");

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const userId = req.user._id; // assuming user is attached

  User.deleteItemFromCart(userId, prodId)
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};
