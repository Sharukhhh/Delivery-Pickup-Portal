import express from 'express';
import { googleLogin } from '../controllers/auth/authController.js';
const router = express.Router();

router.post('/signin' , googleLogin);


export default router;