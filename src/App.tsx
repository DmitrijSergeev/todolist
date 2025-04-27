import {ThemeProvider} from "./components/theme-provider/theme-provider"
import {ModeToggle} from "./components/mode-toggle/mode-toggle.tsx";
import TodoListItem from "./components/todolist/TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";

export type Task = {
    id: string;
    title: string;
    isDone: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
        { id: v1(), title: 'Typescript', isDone: false },
        { id: v1(), title: 'RTK query', isDone: false },
    ])
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle/>
            </ThemeProvider>
            <div className={'flex flex-col justify-start mt-18 ml-12 border-2 border-gray-500 ' +
                'w-80 h-100 p-5'}>
                <TodoListItem tasks={tasks}/>
            </div>
        </>
    )
}

export default App
