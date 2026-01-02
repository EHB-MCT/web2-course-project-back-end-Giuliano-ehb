// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema
({ 
  name: String, 
  wear: String, 
  type: String, 
  imagelink: String }); 

module.exports = mongoose.model("products", productSchema);