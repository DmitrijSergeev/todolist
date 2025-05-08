export type Task = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterValueType = 'all'|'completed'|'active'

export type _TodoList = {
    id: string
    title: string
    addedDate: string
    order: number
}

