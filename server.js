const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const connectDB = require("./db");
const Users = require("./models/Users");

const port = 3000;


const app = express();
app.use(cors());
app.use(express.json());


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



 

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});