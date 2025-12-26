const express = require("express"); 
const router = express.Router(); 
const Product = require("../models/Products"); 
router.get("/products", async (req, res) => { 
  
  try { 
    
    const products = await Product.find(); res.json(products); 
  
  } catch (err) { 
    
    console.error(err); 
    
    res.status(500).json({ error: "cannot get products" }); 
  
  }}); 
    
    
    module.exports = router;