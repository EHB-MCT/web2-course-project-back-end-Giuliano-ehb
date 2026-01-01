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




// outfit posten van user



router.post("/outfits", async (req, res) => {
  try {
    const { userId, outfitName, top, shirt, bottom , imageLinkTop , imageLinkShirt , imageLinkBottom } = req.body;



    if (!userId || !outfitName) {


      return res.status(400).json({ error: "all fields musti be filled in" });
    }





    // email user

    const user = await User.findById(userId);

    const newOutfit = await Outfits.create({
      userId,
      outfitName,
      top,
      shirt,
      bottom,
      imageLinkTop,
      imageLinkShirt,
      imageLinkBottom,
     
      madeBy: user?.email || "unknown"

    });

    res.status(201).json(newOutfit);

  } catch (error) {


    console.log(error);
    res.status(500).json({ error: "cannot create outfit" });
  }
});


module.exports = router;