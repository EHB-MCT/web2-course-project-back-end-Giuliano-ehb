const mongoose = require("mongoose");

const outfitsSchema = new mongoose.Schema({
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  outfitName: { type: String, required: true },
  madeBy: { type: String, required: true },
  imageLinkTop: { type: String, default: null },
  imageLinkShirt: { type: String, default: null },
  imageLinkBottom: { type: String, default: null }

});

module.exports = mongoose.model("Outfits", outfitsSchema);
