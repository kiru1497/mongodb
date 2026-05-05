const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

// 🛒 Get Cart Page
router.get("/cart", cartController.getCart);

// ➕ Add product to cart
router.post("/cart", cartController.postAddToCart);

// ❌ Delete product from cart
router.post("/cart-delete-item", cartController.postCartDeleteProduct);

module.exports = router;
