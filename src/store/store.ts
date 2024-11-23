import {todoListsReducer} from "../store/todolist-reducer/todolist-reducer";
import {tasksReducer} from "../store/task-reducer/task-reducer";
import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import {appReducer} from "../store/app-reducer/app-reducer.ts";

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootState = ReturnType<typeof store.getState>

// ❗ UnknownAction вместо AnyAction
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppRootState,
//     unknown,
//     UnknownAction
// >

// export type AppDispatch = typeof store.dispatch
// ❗ UnknownAction вместо AnyAction
// export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.store = store