const express = require("express"); const router = express.Router(); 

router.get("/products", (req, res) => 

{ res.json({ message: "Products is working" }); }); 


module.exports = router;