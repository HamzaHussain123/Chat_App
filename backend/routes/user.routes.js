import express from 'express'
import { isAuthenticate } from '../middleware/verifyToken.js'
import { getUserForSidebar } from '../controller/user.controller.js'


const router = express.Router()

// The user that is logged in will not be shown in the sidebar  

router.get("/", isAuthenticate, getUserForSidebar)


export default router