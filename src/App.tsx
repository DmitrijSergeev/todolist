import {ThemeProvider} from "./components/theme-provider/theme-provider"
import {ModeToggle} from "./components/mode-toggle/mode-toggle.tsx";
import TodoListItem from "./components/todolist/TodoListItem.tsx";
import {useEffect, useState} from "react";
import {v1} from "uuid";
import {FilterType, Task, TodoList} from "./types/Types.ts";
import axios from "axios";

function App() {

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
    },[instance])


    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ])
    const [filter, setFilter] = useState<FilterType>('all')

    const [todoLists, setTodoLists] = useState<TodoList[]>([
        {todoId: v1(), title: 'What to learn', filter: 'all'},
        {todoId: v1(), title: 'What to buy', filter: 'all'},
    ])

    const removeTask = (id: string) => {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title,
            isDone: false,
        }
        setTasks([...tasks, newTask])
    }

    let filteredTasks = tasks
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    if (filter === 'active') {
        filteredTasks = filteredTasks.filter(t => !t.isDone)
    }

    const filterTask = (filter: FilterType) => {
        setFilter(filter);
    }

    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle/>
            </ThemeProvider>
            <div className={'flex flex-row justify-start mt-10 ml-12 w-380'}>
                {todoLists.map((t) => {
                    return (
                        <TodoListItem key={t.todoId}
                                      tasks={filteredTasks}
                                      removeTask={removeTask}
                                      addTask={addTask}
                                      filterTask={filterTask}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App
