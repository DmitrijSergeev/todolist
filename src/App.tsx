import './App.css'
import {useEffect, useState} from "react";
import {TodoList} from "./components/todolist/todoList";
import {TodoLists} from "./types/types.ts";
import axios from "axios";

function App() {

    const [todolists, setTodolists] = useState<TodoLists[]>([])

    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
                headers: {
                    Authorization: 'Bearer 3d19e37f-0207-4f96-81a9-f06ed06f55d3',
                },
            })
            .then(res => {
                console.log(res.data)
            })
    }, []);

    return (
        <>
            <TodoList />
        </>
    )
}

export default App
