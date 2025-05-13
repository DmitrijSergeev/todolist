export type Task = {
    taskId: string;
    title: string;
    isDone: boolean;
}
export type Todolist = {
    id: string
    title: string
    filter: FilterValues
}
export type FilterValues = 'all'|'completed'|'active'

export type TaskState = Record<string, Task[]>

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