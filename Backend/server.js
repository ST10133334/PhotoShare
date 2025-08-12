import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
import mongoose from "mongoose";

//Importing enviroment variables
dotenv.config();

//Initialize the express application
const app = express();
const PORT = process.env.PORT || 8000;
//const MONGODB_URI = process.env.MONGO_URI
const MONGO_URI="mongodb://localhost:27017/PhotoShare"


//Add middleware to parse JSON requests
app.use(express.json());

//Test route
app.use('/api', routes);

//Load SSL certificates
const sslOptions = {
    key:fs.readFileSync('certs/localhost-key.pem'),
    cert: fs.readFileSync('certs/localhost.pem')
}

//Add Database connection
mongoose.connect(MONGO_URI, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
    

//Create HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`HTTPS Server is running on port ${PORT}`);
});

//Start the server
//app.listen(process.env.PORT || 5000, () => { 
//  console.log("Server is Running on port + ${process.env.PORT || 8000}");
//});
