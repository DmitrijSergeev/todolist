import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoLists} from "../../types/types";

export type FilterValues = 'all' | 'active' | 'completed'
export type TodolistDomain = TodoLists & {
    filter: FilterValues
}
const initialState: TodolistDomain[] = []

export const todoListSlice = createSlice({
    name: 'todoLists',
    initialState,
    reducers: {
        setTodoLists(_state, action: PayloadAction<TodolistDomain[]>){
            return action.payload.map( tl => ({...tl, filter: 'all'}) )
        }
    },
    // extraReducers(builder) {
    //     builder.addCase( ()=>{} )
    // }
})

// export const createAsyncThunk = (
//     'todoLists/fetch-todoLists',
//         async ()=>{
//
//     }
// )
