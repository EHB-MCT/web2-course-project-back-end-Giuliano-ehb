const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema
({ 
  name: String, 
  wear: String, 
  type: String, 
  imagelink: String }); 

module.exports = mongoose.model("products", productSchema);