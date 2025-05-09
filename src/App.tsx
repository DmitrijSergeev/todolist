import {ThemeProvider} from "./components/theme-provider/theme-provider"
import {ModeToggle} from "./components/mode-toggle/mode-toggle.tsx";
import TodoListItem from "./components/todolist/TodoListItem.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {CreateTodolistResponse, TodoList} from "./types/Types.ts";
import {v1} from "uuid";

function App() {

    const [todoLists, setTodoLists] = useState<TodoList[]>([
        {id: v1(), title: 'Hi!', addedDate: '5555', order: Math.random()},
    ])

    const token = '6f0c5e43-d050-4bcc-af24-f1fd04510d23'
    const apiKey = 'dd4b6a3b-7a9d-431e-8935-dabb3a0ae481'

    const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        headers: {
            Authorization: `Bearer ${token}`,
            'API-KEY': apiKey,
        },
    })

    useEffect(() => {
        instance.get('todo-lists').then(response =>
            console.log(response.data))
    }, [instance])

    const createTodoList = (title: string) => {
        instance.post<CreateTodolistResponse>('todo-lists', {title})
            .then(res => {
                const newTodoList = res.data.data.item
                setTodoLists([...todoLists, newTodoList])
            })
    }

    const deleteTodoList = (id: string) => {
        instance.delete(`todo-lists/${id}`)
            .then(response => console.log(response.data))
    }
    const changeTodolistTitle = (id: string, title: string) => {
        instance.put(`todo-lists/${id}`, {title})
            .then(response => console.log(response.data))
    }

    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle/>
            </ThemeProvider>
            <div className={'flex flex-row justify-start mt-10 ml-12 w-380'}>
                <TodoListItem createTodoList={createTodoList}
                              deleteTodoList={deleteTodoList}
                              changeTodolistTitle={changeTodolistTitle}
                />
            </div>
        </div>
    )
}

export default App
