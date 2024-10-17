import './App.css'
import {useEffect} from "react";
import {ApiTodoLists} from "./api/api-todolists";
import {TodoList} from "./components/todolist/todoList";

function App() {

    useEffect(() => {
        ApiTodoLists.getTodoLists().then( (res)=>{
            console.log(res.data)
        } )
    }, []);

    return (
        <>
            <TodoList/>
        </>
    )
}

export default App
