// server.js (WORKING DUMMY VERSION)
const express = require("express");
const app = express();
const cors = require('cors')
const port = 3000;


app.use(express.json());
app.use(cors());

// Dummy GET route
app.get("/", (req, res) => {
  res.send({ message: "Hello from dummy server!" });
});

// Another dummy route
app.get("/test", (req, res) => {
  res.send({ status: "ok", data: "This is just dummy data" });
});

// Dummy POST route
app.post("/echo", (req, res) => {
  res.send({ received: req.body });
});

// Start server
app.listen(port, () => {
  console.log(`Dummy server running at http://localhost:${port}`);
});