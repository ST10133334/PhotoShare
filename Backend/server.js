import express from "express"
import dotenv from "dotenv"
import routes from './routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api', routes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running on port + ${process.env.PORT || 8000}");
})