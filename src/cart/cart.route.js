// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const { saveToCart, getFromCart } = require("../controllers/cartController");

// POST /cart
router.post("/cart", saveToCart);

// GET /cart
router.get("/cart", getFromCart);

module.exports = router;
