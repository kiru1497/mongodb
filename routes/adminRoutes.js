const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// ➕ Add product
router.post("/add-product", adminController.postAddProduct);

// ✏️ Edit product
router.post("/edit-product", adminController.postEditProduct);

router.get("/products", adminController.getProducts);

module.exports = router;
