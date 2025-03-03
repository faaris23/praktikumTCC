import express from "express";
import * as UserController from "../controller/UserController.js";
import * as NoteController from "../controller/NoteController.js";

const router = express.Router();

// Rute User
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

// Rute Notes
router.get('/notes/:userId', NoteController.getNotes);
router.get('/note/:id', NoteController.getNoteById);
router.post('/notes', NoteController.createNote);
router.patch('/note/:id', NoteController.updateNote);
router.delete('/note/:id', NoteController.deleteNote);

export default router;
