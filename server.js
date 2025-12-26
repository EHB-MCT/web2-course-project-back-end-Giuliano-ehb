require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const connectDB = require("./db");
const Users = require("./models/Users");
const productRoutes = require("./routes/products");

const port = 3000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(productRoutes);


// register

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "email and password need te be filled in." });
    }

  
  
    try {
        const db = await connectDB();
        const users = Users(db);

        // hashed wachtwoord

      
        const hashedPassword = await bcrypt.hash(password, 10);

       // user opslaan in database

        await users.insertOne({ email, password: hashedPassword });

    
    
        res.json({ message: "user succsefully registered." });
    } catch (err) {
        res.status(500).json({ error: "something went wrong." });
    }
});



// login


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    
    if (!email || !password) {
        return res.status(400).json({ error: "fill email and password." });
    }

    try {
       
        // connectie met database

        const db = await connectDB();
        const users = Users(db);

     // user zoeken in database , als hij niet bestaat error geven
        
        const user = await users.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "email or password is incrorrect." });
        }

       


        const correct = await bcrypt.compare(password, user.password);

        if (!correct) {
            return res.status(401).json({ error: "email or password is incorrect." });
        }

      


        res.json({ message: "Login succesfull", user });
    } catch (err) {
        res.status(500).json({ error: "something went wrong on the server." });
    }
});

 

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});