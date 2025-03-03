import express from "express";
import * as UserController from "../controller/UserController.js";

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/Users/:id', UserController.getUserById);
router.post('/Users', UserController.createUser);
router.patch('/Users/:id', UserController.updateUser);
router.delete('/Users/:id', UserController.deleteUser);

export default router;