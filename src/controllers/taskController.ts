import { Request, Response } from 'express';
import { addTask, getAllTasks, deleteTaskById, updateTaskById } from '../services/taskService';

export const addTaskController = async (req: Request, res: Response) => {
    const newTask = req.body;
    try {
        const taskId = await addTask(newTask);
        return res.status(201).send({
            status: "success",
            message: "Task added successfully",
            data: {
                id: taskId,
            }
        });
    } catch (error: any) {
        return res.status(400).send({
            status: "error",
            message: "Bad request",
            data: error.message,
        });
    }
}

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const allTasks = await getAllTasks();
        return res.status(200).send({
            status: "success",
            message: "Tasks retrieved successfully",
            data: allTasks,
        });
    } catch (error: any) {
        return res.status(500).send({
            status: "error",
            message: "Internal server error",
            data: null,
        });
    }
}

export const deleteTaskController = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        await deleteTaskById(taskId);
        return res.status(200).send({
            status: "success",
            message: "Task deleted successfully",
            data: null,
        });
    } catch (error: any) {
        if(error==="Task not found"){
            return res.status(404).send({
                status: "error",
                message: "not found",
                data: null,
            });
        }
        return res.status(400).send({
            status: "error",
            message: "Bad request",
            data: null,
        });
    }
};

export const updateTaskController = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const updatedTaskData = req.body;
    try {
        await updateTaskById(taskId, updatedTaskData);
        return res.status(200).send({
            status: "success",
            message: "Task updated successfully",
            data: {
                id:req.params.id
            }
        });
    } catch (error: any) {
        if(error==="Task not found"){
            return res.status(404).send({
                status: "error",
                message: "not found",
                data: null,
            });
        }
        return res.status(400).send({
            status: "error",
            message: "Bad request",
            data: null,
        });
    }
};