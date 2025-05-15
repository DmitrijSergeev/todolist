import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
import {v1} from "uuid";
import {useState} from "react";
import {FilterValues, TaskState, Todolist} from "./types/Types.ts";
import {CreateItemForm} from "./CreateItemForm.tsx";

function App() {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const [todolists, setTodolists] = useState<Todolist[]>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TaskState>({
        [todolistId1]: [
            {taskId: v1(), title: 'HTML&CSS', isDone: true},
            {taskId: v1(), title: 'JS', isDone: true},
            {taskId: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistId2]: [
            {taskId: v1(), title: 'Rest API', isDone: true},
            {taskId: v1(), title: 'GraphQL', isDone: false},
        ],
    })

    // const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (id: string, taskId: string) => {
        //setTasks(tasks.filter(task => task.taskId !== taskId));
        setTasks({...tasks, [id]: tasks[id].filter(t => t.taskId !== taskId)})
    }

    const addTask = (id: string, title: string) => {
        const newTask = {
            taskId: v1(), title, isDone: false
        }
        setTasks({...tasks, [id]: [newTask, ...tasks[id]]})
    }

    const changeTaskStatus = (id: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks, [id]: tasks[id].map(t => t.taskId === taskId
                ? {...t, isDone}
                : t)
        })
    }

    const addTodolist = (title: string) => {
        const todolistId = v1();
        const newTodoList: Todolist = {
            id: todolistId, title, filter: 'all'
        }
        setTodolists([...todolists, newTodoList])
        setTasks({...tasks, [todolistId]: []})
    }

    const onChangeTaskTitle = (id: string, taskId: string, title: string) => {
        setTasks({...tasks, [id]: tasks[id].map( t => t.taskId === taskId
                ? {...t, title}
                : t)})
    }

    const onChangeTodolistTitle = (todoId: string, title: string) => {
        setTodolists(todolists.map( todo => todo.id === todoId
            ? {...todo, title}
            : todo))
    }

    const  deleteTodolist = (id: string) => {
        setTodolists(todolists.filter(t => t.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }

    return (
        <div className="app">
            <CreateItemForm addItem={addTodolist}/>
            {todolists.map((todolist: Todolist) => {
                const todolistTasks = tasks[todolist.id]
                let filteredTasks = todolistTasks
                if (todolist.filter === 'active') {
                    filteredTasks = todolistTasks.filter(task => !task.isDone);
                }
                if (todolist.filter === 'completed') {
                    filteredTasks = todolistTasks.filter(task => task.isDone);
                }

                const changeFilter = (todoId: string, filter: FilterValues) => {
                    setTodolists(todolists.map(todo => todoId === todo.id
                        ? {...todo, filter}
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
                        onChangeTaskTitle={onChangeTaskTitle}
                        deleteTodolist={deleteTodolist}
                        onChangeTodolistTitle={onChangeTodolistTitle}
                    />
                )
            })}

        </div>
    )
}

export default App
