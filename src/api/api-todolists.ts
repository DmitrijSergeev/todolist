import axios from "axios";
import {TodoLists} from "../types/types.ts";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        Authorization: 'Bearer 624657c0-fa6c-4057-80fe-a1965a1de120',
        'API-KEY': '652bd14f-52f4-49ce-a85d-31e9ab955ce0'
    }
})

export const ApiTodoLists = {
    getTodoLists(){
        return instance.get<TodoLists>('todo-lists')
    }
}

