import {ThemeProvider} from "./components/theme-provider/theme-provider"
import {ModeToggle} from "./components/mode-toggle/mode-toggle.tsx";
import TodoListItem from "./components/todolist/TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";
import {FilterType, Task} from "./types/Types.ts";

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ])
    const [filter, setFilter] = useState<FilterType>('all')

    //const [todoLists, setTodoLists] = useState<TodoList>()

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
        filteredTasks = tasks.filter( t => t.isDone)
    }
    if(filter === 'active'){
        filteredTasks = filteredTasks.filter( t => !t.isDone)
    }

    const filterTask = (filter: FilterType) => {
        setFilter(filter);
    }

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle/>
            </ThemeProvider>
            <div className={'flex flex-col justify-start mt-18 ml-12 border-2 border-gray-500 ' +
                'w-80 p-5'}>
                <TodoListItem tasks={filteredTasks}
                              removeTask={removeTask}
                              addTask={addTask}
                              filterTask={filterTask}
                />
            </div>
        </>
    )
}

export default App
