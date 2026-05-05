const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.post("/create-order", orderController.postOrder);
router.get("/orders", orderController.getOrders);

module.exports = router;
