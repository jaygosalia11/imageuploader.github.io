
const express = require("express");
const cors = require("cors"); // You can add this back if needed
const mongoose = require("mongoose");
require("dotenv").config();
const UploadRoute = require("./routes/Uploadroute.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 9000;

// Use async/await to connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase(); // Call the function to connect to MongoDB
// console.log("MONGO_URI:", process.env.MONGO_URI);
app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
