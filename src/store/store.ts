import {configureStore, ThunkAction, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {todoListsReducer} from "./todolist-reducer/todolist-reducer";
import {tasksReducer} from "./task-reducer/task-reducer";

export const store = configureStore({
    reducer: {
        todoLists: todoListsReducer,
        tasks: tasksReducer
    }
})

export type AppRootState = ReturnType<typeof store.getState>

// ❗ UnknownAction вместо AnyAction
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    UnknownAction
>

// export type AppDispatch = typeof store.dispatch
// ❗ UnknownAction вместо AnyAction
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>