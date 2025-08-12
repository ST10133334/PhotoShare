import express from 'express'

const router = express.Router();

router.get('/welcome', (red, res) => {
    res.send("Welcome to the PhotoShare API");
});

export default router;