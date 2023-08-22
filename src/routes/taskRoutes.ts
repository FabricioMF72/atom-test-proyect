import express from "express";
import { addTaskController,  deleteTaskController, getAllTasksController, updateTaskController } from "../controllers/taskController";

const router = express.Router();

router.get('/', getAllTasksController);
router.post('/', addTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', updateTaskController);

export default router;