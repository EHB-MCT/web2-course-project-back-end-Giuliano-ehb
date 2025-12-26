import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  wear: String,
  type: String,
  imagelink: String
});

export default mongoose.model("Products", productSchema);
