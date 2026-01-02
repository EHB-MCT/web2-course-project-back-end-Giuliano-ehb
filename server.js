// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/
// bcrypt used for login and register used on lines 4 , 33 , 37 and 69

// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const connectDB = require("./db");
const User = require("./models/Users");
const productRoutes = require("./routes/products"); 
const outfitsRoutes = require("./routes/outfits");



const port = 3000;


const app = express();

app.use(cors());
app.use(express.json());
app.use("/", productRoutes);
app.use("/", outfitsRoutes);
app.use("/", require("./routes/outfits"));
app.use("/outfits", require("./routes/outfits"));
app.use("/products", productRoutes);
connectDB();


// register

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "email and password need to be filled in" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword
    });

    res.json({ message: "user successfully registered." });
 

} catch (error) {
    console.error(error);

    res.status(500).json({ error: "something went wrong on the sever." });
  }
});



// login


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "email and password need to be filled in" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "email or password is incorrect" });
    }

    const correct = await bcrypt.compare(password, user.password);

    if (!correct) {
      return res.status(401).json({ error: "email or password is incorrect" });
    }

    res.json({ message: "login succesfull", user });
  } catch (error) {
   
   
    console.error(error);

    res.status(500).json({ error: "something went wrong on the server." });
  }
});


 

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});