import { NextFunction, Request, Response } from "express";
import { TaskValidator } from "../validators/task-validator";

export const validator = (req: Request, res: Response, next:NextFunction) => {
    const requestData = req.body;

    TaskValidator.validate(requestData, { abortEarly: false })
        .then(() => {
            next();
        })
        .catch(validationError => {
            res.status(400).json({ errors: validationError.errors });
        });
}