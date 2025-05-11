import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
import {v1} from "uuid";
import {useState} from "react";
import {FilterValueType, Task} from "./types/Types.ts";

function App() {

    const [tasks, setTasks] = useState<Task[]>([
        { taskId: v1(), title: 'HTML&CSS', isDone: true },
        { taskId: v1(), title: 'JS', isDone: true },
        { taskId: v1(), title: 'ReactJS', isDone: false },
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter( task => task.taskId !== taskId ));
    }

    let filteredTasks: Task[] = tasks;
    if (filter === 'active') {
        filteredTasks = tasks.filter( task => !task.isDone );
    }
    if (filter === 'completed'){
        filteredTasks = tasks.filter( task => task.isDone );
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter);
    }

    return (
        <div className="app">
            <TodoListItem
                title="What to learn"
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}

export default App
