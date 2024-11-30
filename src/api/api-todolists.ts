import axios from "axios";
import {TodoLists} from "../types/types.ts";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        Authorization: `Bearer ${'fcbef28f-8b54-4502-926b-ae190bc15531'}`,
        'API-KEY': '85a2649f-ce38-412a-b998-cf6737c74680',
    },
})

export const todoListsApi = {
    getTodoLists(){
        return instance.get<TodoLists[]>('todo-lists')
    }
}