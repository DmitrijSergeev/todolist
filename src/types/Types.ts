export type Task = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterType = 'all'|'completed'|'active'

export type TodoList = {
    todoId: string;
    title: string;
    filter: FilterType;
}

export type _TodoList = {
    id: string
    title: string
    addedDate: string
    order: number
}

