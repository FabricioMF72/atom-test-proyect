import { object, string } from 'yup';
import { STATUS_COMPLETED, STATUS_PENDING } from '../models/task';
export const TaskValidator = object().shape({
    title: string().required().typeError('Title must be a string'),
    description: string().required(),
    status: string().oneOf([STATUS_COMPLETED, STATUS_PENDING]).required()
}).strict();