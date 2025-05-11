export type Task = {
    taskId: string;
    title: string;
    isDone: boolean;
}

export type FilterValueType = 'all'|'completed'|'active'

export type TodoList = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type FieldError = {
    error: string
    field: string
}

export type BaseResponse<T = object> = {
    data: T
    resultCode: number
    messages: string[]
    fieldsErrors: FieldError[]
}