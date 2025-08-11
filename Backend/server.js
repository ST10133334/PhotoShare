import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the PhotoShare API");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running on port + ${process.env.PORT || 8000}");
})