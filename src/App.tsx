import './App.css'
import {useEffect, useState} from "react";
import {ApiTodoLists} from "./api/api-todolists";
import {TodoList} from "./components/todolist/todoList";
import {v1} from "uuid";
import {TodoLists} from "./types/types.ts";

function App() {
    const [todos, setTodos] = useState<TodoLists>({
        id: v1(),
        title: 'What to learn',
        addedDate: '14.08.1976',
        order: 14
    });

    useEffect(() => {
        ApiTodoLists.getTodoLists().then((res) => {
            console.log(res.data)
        })
    }, []);

    const changeTitle = (title: string) => {
        setTodos({...todos, title})
    }

    return (
        <>
            <TodoList
                todos={todos}
                changeTitle={changeTitle}
            />
        </>
    )
}

export default App
