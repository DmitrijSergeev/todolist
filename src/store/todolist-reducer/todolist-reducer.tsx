import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoLists} from "../../types/types";

export type FilterValues = 'all' | 'active' | 'completed'
export type TodolistDomain = TodoLists & {
    filter: FilterValues
}
const initialState: TodolistDomain[] = []

export const slice = createSlice({
    name: 'todoLists',
    initialState,
    reducers: {
        setTodoLists(_state, action: PayloadAction<TodolistDomain[]>){
            return action.payload.map( tl => ({...tl, filter: 'all'}) )
        }
    },
})

export const todoListsReducer = slice.reducer


