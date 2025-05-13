import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
import {v1} from "uuid";
import {useState} from "react";
import {FilterValueType, Task} from "./types/Types.ts";

function App() {

    const [tasks, setTasks] = useState<Task[]>([
        {taskId: v1(), title: 'HTML&CSS', isDone: true},
        {taskId: v1(), title: 'JS', isDone: true},
        {taskId: v1(), title: 'ReactJS', isDone: false},
    ])

    // const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.taskId !== taskId));
    }

    const addTask = (title: string) => {
        const newTask = {
            taskId: v1(), title, isDone: false
        }
        setTasks([...tasks, newTask])
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map( t => t.taskId === taskId
            ? {...t, isDone}
            : t))
    }

    let filteredTasks: Task[] = tasks;
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone);
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone);
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter);
    }

    return (
        <div className="app">
            <TodoListItem
                title="What to learn?"
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    )
}

export default App
