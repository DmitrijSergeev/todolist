export type Task = {
    id: string;
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

export type CreateTodolistResponse = {
    data: { item: TodoList }
    resultCode: number
    messages: string[]
    fieldsErrors: FieldError[]
}
export type DeleteTodolistResponse = {
    data: { item: TodoList }
    resultCode: number
    messages: string[]
    fieldsErrors: FieldError[]
}