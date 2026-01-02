// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
