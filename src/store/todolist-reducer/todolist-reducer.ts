import {TodoLists} from "../../types/types";

const initialState: TodoLists[] = []

export const todoListsReducer = (state = initialState, action: ActionsType): TodoLists[] => {
    switch (action.type){
        case '': {
            return state
        }
        default:
            return state
    }
}

type ActionsType = any

