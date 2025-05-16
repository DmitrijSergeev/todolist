import {Todolist} from "../types/Types.ts";

const initialState: Todolist[] = []

export type DeleteTodolistAction = {
    type: 'delete_todolist'
    payload: {
        id: string
    }
}

type Actions = DeleteTodolistAction

export const todolistsReducer = (state = initialState, action: Actions): Todolist[] => {
    switch (action.type) {
        case 'delete_todolist':{
            return state.filter( t => t.id !== action.payload.id )
        }
        default:
            return state;
    }
}