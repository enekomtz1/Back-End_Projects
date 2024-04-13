const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");

// Create a new product:
router.post("/", createProduct);

// Update product:
router.put("/:id", updateProduct);

// Delete a product:
router.delete("/:id", deleteProduct);

// Get all products:
router.get("/", getProducts);

// Get a specific product by its ID:
router.get("/:id", getProduct);

module.exports = router;
