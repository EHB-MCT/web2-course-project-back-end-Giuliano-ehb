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



// outfit wijzigen van user


router.put("/outfits/:id", async (req, res) => {
  try {

    const { outfitName, imageLinkTop, imageLinkShirt, imageLinkBottom } = req.body;

    const updated = await Outfits.findUpdate(
      req.params.id,
      {
        outfitName,
        imageLinkTop,
        imageLinkShirt,
        imageLinkBottom
      },
     
      { new: true }
    );

    res.json(updated);

  } catch (error) {


    console.log(error);
    
   
    res.status(500).json({ error: "cannot update outfit" });
  }
});



// outfit deleten

router.delete("/outfits/:id", async (req, res) => {
  try {
    const deleted = await Outfits.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Outfit not found" });
    }

    res.json({ message: "Outfit deleted sucssesfully" });
  } 
  catch (error) {

    console.error("Delete error:", error);

    res.status(500).json({ error: "cannot delete outfit" });
  }
});






    // email user

    const user = await User.findById(userId);

    const newOutfit = await Outfits.create({
      userId,
      outfitName,
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