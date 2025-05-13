import {FilterValueType, Task} from "./types/Types.ts";
import {Button} from "./Button.tsx";
import {useRef, KeyboardEvent, ChangeEvent, useState} from "react";

type Props = {
    title: string
    tasks: Task[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValueType
}

export const TodoListItem = (
    {tasks, title, removeTask, changeFilter, addTask, changeTaskStatus, filter}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<null | string>(null)

    const addTaskHandler = () => {

        if (inputRef.current && inputRef.current.value.trim() !== '') {
            addTask(inputRef.current.value)
            inputRef.current.value = ''
            setError(null)
        } else {
            setError('Title is required')
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={inputRef}
                       onKeyDown={onKeyDownHandler}
                       className={error ? 'error' : ''}
                />
                <Button name={'+'}
                        onClick={addTaskHandler}
                />
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            {tasks.length === 0 ? (
                <p style={{color: 'red'}}>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const removeHandler = () => {
                            removeTask(task.taskId)
                        }
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(task.taskId, e.currentTarget.checked)
                        }
                        return (
                            <li key={task.taskId}
                                className={task.isDone ? 'is-done' : ''}
                            >
                                <Button name={'X'} onClick={removeHandler}/>
                                <input type="checkbox" checked={task.isDone}
                                       onChange={onChangeStatusHandler}
                                />
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button name={'All'}
                        className={filter === 'all' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter('all')
                        }}
                />
                <Button name={'Active'}
                        className={filter === 'active' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter('active')
                        }}
                />
                <Button name={'Completed'}
                        className={filter === 'completed' ? 'active-filter' : ''}
                        onClick={() => {
                            changeFilter('completed')
                        }}
                />
            </div>
        </div>
    );
};
