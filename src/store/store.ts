import {configureStore} from "@reduxjs/toolkit";
import {todolistReducer} from "./todolist-trducer/todolist-reducer";
import {taskReducer} from "./task-reducer/task-reducer";

export const store = configureStore({
    reducer: {
        todoLists: todolistReducer,
        tasks: taskReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch