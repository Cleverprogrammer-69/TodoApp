import express from "express";
import {getAllTasks, getOneTask, createTask, deleteTask, updateTask} from '../controllers/tasksController.js';
const router=express.Router()
//get all tasks
router.get("/", getAllTasks);

router.get("/:id", getOneTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);
export default router