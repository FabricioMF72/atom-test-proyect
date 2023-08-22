import { db } from '../config/firebase';
import { TaskValidator } from '../validators/task-validator';
import { Tasks } from '../models/task';

export const addTask = async (newTask: any) => {
    const tasksCollection = db.collection("tasks");
    try {
        await TaskValidator.validate(newTask);
        const docRef = await tasksCollection.add(newTask);
        return docRef.id;
    } catch (error) {
        throw error;
    }
}

export const getAllTasks = async () => {
    const allTasks: Tasks[] = [];
    const querySnapshot = await db.collection("tasks").get();
    querySnapshot.forEach((doc: any) => allTasks.push({ id: doc.id, ...doc.data() }));
    return allTasks;
}

export const deleteTaskById = async (taskId: string) => {
    try {
        const taskDoc = await db.collection("tasks").doc(taskId).get();
        if (!taskDoc.exists) {
            throw new Error("Task not found");
        }
        await db.collection("tasks").doc(taskId).delete();
    } catch (error) {
        throw error;
    }
}

export const updateTaskById = async (taskId: string, updatedTaskData: any) => {
    try {
        await TaskValidator.validate(updatedTaskData);

        const taskDoc = await db.collection("tasks").doc(taskId).get();

        if (!taskDoc.exists) {
            throw new Error("Task not found");
        }

        await db.collection("tasks").doc(taskId).update(updatedTaskData);
    } catch (error) {
        throw error;
    }
}