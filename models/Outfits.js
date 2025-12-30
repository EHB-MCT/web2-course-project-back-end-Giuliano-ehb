const mongoose = require("mongoose");

const outfitsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  outfitName: { type: String, required: true },

  top: { type: String, default: null },
  shirt: { type: String, default: null },
  bottom: { type: String, default: null },
  madeBy: { type: String, required: true },

});

module.exports = mongoose.model("Outfits", outfitsSchema);
