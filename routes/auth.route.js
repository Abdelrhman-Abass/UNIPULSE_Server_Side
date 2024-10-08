import express from 'express'
import { forgotPassword, login, logout, resetPassword, updateVerificationCode, verifyCode } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/login', login )
router.post('/logout',logout )
router.post('/verify/:email',verifyCode )
router.post('/update-verify',updateVerificationCode )

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);




export default router