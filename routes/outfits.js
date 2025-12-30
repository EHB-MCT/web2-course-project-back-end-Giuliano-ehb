const express = require("express");
const router = express.Router();
const Outfits = require("../models/Outfits");
const User = require("../models/Users"); 



// outfit getten van user


router.get("/outfits/:userId", async (req, res) => {
  try {
    const outfits = await Outfits.find({ userId: req.params.userId });
    res.json(outfits);

  } catch (error) {

    res.status(500).json({ error: "cannot get outfits" });
  }
});


module.exports = router;