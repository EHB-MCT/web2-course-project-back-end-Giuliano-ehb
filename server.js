const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
 
app.use(cors());
app.use(express.json());
 
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
 
    // check credentials
    if (username == "santa" && password == "hoho") {
        // correcte credentials
        res.send({ message: "Login successful" });
    } else {
        //inncorrect credentials
        res.status(401).send(new Error("Invalid credentials"));
    }
});
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});