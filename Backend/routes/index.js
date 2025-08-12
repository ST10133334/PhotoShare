import express, { Router } from 'express'
import authRoutes from './authRoutes.js'
import photoRoutes from './photoRoutes.js'
import userRoutes from './userRoutes.js'

const router = express.Router();

router.use('/auth', authRoutes)

export default router;