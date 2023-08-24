import { Request, Response } from 'express';
import { addTask, getAllTasks, deleteTaskById, updateTaskById } from '../services/taskService';
import { ResponseStatus, StatusCodes } from '../models/task';

export const addTaskController = async (req: Request, res: Response) => {
    const newTask = req.body;
    try {
        const taskId = await addTask(newTask);
        return res.status(StatusCodes.Created).send({
            status: ResponseStatus.Success,
            message: "Task added successfully",
            data: {
                id: taskId,
            }
        });
    } catch (error: any) {
        return res.status(StatusCodes.BadRequest).send({
            status: ResponseStatus.Error,
            message: "Bad request",
            data: error.message,
        });
    }
}

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const allTasks = await getAllTasks();
        return res.status(StatusCodes.Success).send({
            status: ResponseStatus.Success,
            message: "Tasks retrieved successfully",
            data: allTasks,
        });
    } catch (error: any) {
        return res.status(StatusCodes.InternalError).send({
            status: ResponseStatus.Error,
            message: "Internal server error",
            data: null,
        });
    }
}

export const deleteTaskController = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        await deleteTaskById(taskId);
        return res.status(StatusCodes.Success).send({
            status: ResponseStatus.Success,
            message: "Task deleted successfully",
            data: null,
        });
    } catch (error: any) {
        if(error==="Task not found"){
            return res.status(StatusCodes.NotFound).send({
                status: ResponseStatus.Error,
                message: "not found",
                data: null,
            });
        }
        return res.status(StatusCodes.BadRequest).send({
            status: ResponseStatus.Error,
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
        return res.status(StatusCodes.Success).send({
            status: ResponseStatus.Success,
            message: "Task updated successfully",
            data: {
                id:req.params.id
            }
        });
    } catch (error: any) {
        if(error==="Task not found"){
            return res.status(StatusCodes.NotFound).send({
                status: ResponseStatus.Error,
                message: "not found",
                data: null,
            });
        }
        return res.status(StatusCodes.BadRequest).send({
            status: ResponseStatus.Error,
            message: "Bad request",
            data: null,
        });
    }
};