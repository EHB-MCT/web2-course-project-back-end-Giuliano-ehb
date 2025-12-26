const express = require("express");
const router = express.Router();
const Product = require("../models/Products");


router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
});




router.post("/products", async (req, res) => {
  try {


    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
 
  } catch (error) {

    res.status(500).json({ error: "cannot create products" });
  }
});

module.exports = router;
