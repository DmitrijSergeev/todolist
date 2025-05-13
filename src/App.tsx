import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
import {v1} from "uuid";
import {useState} from "react";
import {FilterValues, TaskState, Todolist} from "./types/Types.ts";

function App() {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const [todolists, setTodolists] = useState<Todolist[]>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        { id: todolistId2, title: 'What to buy', filter: 'all' },
    ])

    const [tasks, setTasks] = useState<TaskState>({
        [todolistId1]: [
            { taskId: v1(), title: 'HTML&CSS', isDone: true },
            { taskId: v1(), title: 'JS', isDone: true },
            { taskId: v1(), title: 'ReactJS', isDone: false },
        ],
        [todolistId2]: [
            { taskId: v1(), title: 'Rest API', isDone: true },
            { taskId: v1(), title: 'GraphQL', isDone: false },
        ],
    })

    // const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (id:string, taskId: string) => {
        //setTasks(tasks.filter(task => task.taskId !== taskId));
        setTasks({...tasks, [id]: tasks[id].filter( t => t.taskId !== taskId) })
    }

    const addTask = (id:string, title: string) => {
        const newTask = {
            taskId: v1(), title, isDone: false
        }
        setTasks({...tasks, [id]: [newTask, ...tasks[id]]})
    }

    const changeTaskStatus = (id:string, taskId: string, isDone: boolean) => {
        setTasks({...tasks, [id]: tasks[id].map( t => t.taskId === taskId
            ? {...t, isDone}
                : t)})
    }

    return (
        <div className="app">
            {todolists.map( (todolist: Todolist) =>{
                const todolistTasks = tasks[todolist.id]
                let filteredTasks = todolistTasks
                if (todolist.filter === 'active') {
                    filteredTasks = todolistTasks.filter(task => !task.isDone);
                }
                if (todolist.filter === 'completed') {
                    filteredTasks = todolistTasks.filter(task => task.isDone);
                }

                const changeFilter = (todoId: string, filter: FilterValues) => {
                    setTodolists(todolists.map( todo => todoId === todo.id
                        ? {...todo,  filter}
                        : todo))
                }
                return (
                    <TodoListItem
                        key={todolist.id}
                        todolist={todolist}
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                    />
                )
            } )}

        </div>
    )
}

export default App
