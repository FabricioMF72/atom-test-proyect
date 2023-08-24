import express from "express";
import { addTaskController, deleteTaskController, getAllTasksController, updateTaskController } from "../controllers/taskController";
import { validator } from "../middleware/validator";

const router = express.Router();

router.get('/', getAllTasksController);
router.post('/', validator, addTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', validator, updateTaskController);

export default router;