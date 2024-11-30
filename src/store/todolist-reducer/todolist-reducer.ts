import {TodoLists} from "../../types/types";

const initialState: TodoLists[] = []

export const todoListsReducer = (state = initialState, action: ActionsType): TodoLists[] => {
    switch (action.type){
        case 'SET_TODOLISTS': {
            return action.todoLists.map(tl => ({...tl}))
        }
        default:
            return state
    }
}

type ActionsType = SetTodolistAT

export const setTodolistsAC = (todoLists: TodoLists[])=> ({
    type: 'SET_TODOLISTS',
    todoLists
})

type SetTodolistAT = ReturnType<typeof setTodolistsAC>