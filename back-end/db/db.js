require('dotenv').config();
const mongoose = require("mongoose");

async function dbConnect() {
   mongoose
      .connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => {
         console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((err) => {
         console.log("Unable to connect to MongoDB Atlas!");
         console.log(err);
      }); 
}

module.exports = dbConnect;
