export interface Tasks {
    id?: string;
    title: string;
    description: string;
    status: string;
}

export const STATUS_COMPLETED = 'completada'
export const STATUS_PENDING = 'pendiente'
export enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Created = 201,
    Accepted = 202,
    BadRequest = 400,
    InternalError = 500
}

export enum ResponseStatus {
    Success = 'success',
    Error = 'error'
}