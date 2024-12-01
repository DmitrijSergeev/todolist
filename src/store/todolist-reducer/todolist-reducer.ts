import {TodoLists} from "../../types/types";
import {Dispatch} from "redux";
import {todoListsApi} from "../../api/api-todolists";

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

export const setTodolistTC = () => (dispatch: Dispatch)=> {
    todoListsApi.getTodoLists().then( (res)=> {
        dispatch(setTodolistsAC(res.data))
    })
}

type SetTodolistAT = ReturnType<typeof setTodolistsAC>