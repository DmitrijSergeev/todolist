import {FilterValues, Task, Todolist} from "./types/Types.ts";
import {Button} from "./Button.tsx";
import {ChangeEvent} from "react";
import {CreateItemForm} from "./CreateItemForm.tsx";
import {EditableSpan} from "./EditableSpan.tsx";

type Props = {
    todolist: Todolist
    tasks: Task[]
    removeTask: (id:string, taskId: string) => void
    changeFilter: (todoId: string, filter: FilterValues) => void
    addTask: (id:string, title: string) => void
    changeTaskStatus: (id:string, taskId: string, isDone: boolean) => void
    onChangeTitle: (id: string, taskId: string, title: string) => void
}

export const TodoListItem = (
    {tasks, removeTask, changeFilter, addTask, changeTaskStatus, onChangeTitle,
        todolist:{id, title, filter}}: Props) => {

    const addTaskHandler = (title: string) => {
        addTask(id, title)
    }

    return (
        <div>

            <h3>{title}</h3>
            <CreateItemForm addItem={addTaskHandler}/>
            {tasks.length === 0 ? (
                <p style={{color: 'red'}}>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const removeHandler = () => {
                            removeTask(id,  task.taskId)
                        }
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(id, task.taskId, e.currentTarget.checked)
                        }
                        const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            onChangeTitle(id, task.taskId, e.currentTarget.value)
                        }
                        return (
                            <li key={task.taskId}
                                className={task.isDone ? 'is-done' : ''}
                            >
                                <Button name={'X'} onClick={removeHandler}/>
                                <input type="checkbox" checked={task.isDone}
                                       onChange={onChangeStatusHandler}
                                />
                                <EditableSpan value={task.title} onChange={onChangeTitleHandler}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button name={'All'}
                        className={filter === 'all' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter(id, 'all')
                        }}
                />
                <Button name={'Active'}
                        className={filter === 'active' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter(id, 'active')
                        }}
                />
                <Button name={'Completed'}
                        className={filter === 'completed' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter(id, 'completed')
                        }}
                />
            </div>
        </div>
    );
};
