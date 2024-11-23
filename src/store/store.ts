import {todoListsReducer} from "../store/todolist-reducer/todolist-reducer";
import {tasksReducer} from "../store/task-reducer/task-reducer";
import {appReducer} from "../store/app-reducer/app-reducer.ts";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

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