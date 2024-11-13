import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'tasks',
    initialState: {},
    reducers: {}
})

export const tasksReducer = slice.reducer