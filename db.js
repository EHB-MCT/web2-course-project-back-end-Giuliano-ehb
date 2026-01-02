// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = connectDB;
