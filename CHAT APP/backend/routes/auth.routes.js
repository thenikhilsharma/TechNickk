import express from "express";
import { signup } from "../controller/auth.controller";
import { login } from "../controller/auth.controller";
import { logout } from "../controller/auth.controller";

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)


export default router