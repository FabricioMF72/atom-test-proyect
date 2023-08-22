export interface Tasks {
    id?: string;
    title: string;
    description: string;
    status: string;
}

export const STATUS_COMPLETED = 'completada'
export const STATUS_PENDING = 'pendiente'