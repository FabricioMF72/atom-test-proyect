import { db } from '../config/firebase';
import { TaskValidator } from '../validators/task-validator';
import { Tasks } from '../models/task';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
const tasksCollectionRef  = collection(db,"tasks");
export const addTask = async (newTask: any) => {
    try {
        const docRef = await addDoc(tasksCollectionRef,newTask);
        return docRef.id;
    } catch (error) {
        throw error;
    }
}

export const getAllTasks = async () => {
    const allTasks: Tasks[] = [];
    const querySnapshot = await getDocs(tasksCollectionRef);
    querySnapshot.forEach((doc: any) => allTasks.push({ id: doc.id, ...doc.data() }));
    return allTasks;
}

export const deleteTaskById = async (taskId: string) => {
    try {
        const taskDocRef = doc(db, 'tasks', taskId);
        const taskSnapshot = await getDoc(taskDocRef);
        if (!taskSnapshot.exists()) {
            throw new Error("Task not found");
        }
        await deleteDoc(taskDocRef);
    } catch (error) {
        throw error;
    }
}

export const updateTaskById = async (taskId: string, updatedTaskData: any) => {
    try {
        const taskDocRef = doc(db, 'tasks', taskId);
        const taskSnapshot = await getDoc(taskDocRef);
        if (!taskSnapshot.exists()) {
            throw new Error("Task not found");
        }
        await updateDoc(taskDocRef, updatedTaskData);
    } catch (error) {
        throw error;
    }
}