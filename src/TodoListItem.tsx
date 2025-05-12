import {FilterValueType, Task} from "./types/Types.ts";
import {Button} from "./Button.tsx";
import {useRef, KeyboardEvent, ChangeEvent} from "react";

type Props = {
    title: string
    tasks: Task[]
    removeTask:(taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask:(title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TodoListItem = (
    {tasks, title, removeTask, changeFilter, addTask, changeTaskStatus}: Props ) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const addTaskHandler = () => {

        if (inputRef.current && inputRef.current.value.trim() !== '') {
            addTask(inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement> ) => {
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
                />
                <Button name={'+'}
                        onClick={addTaskHandler}
                />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
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
                            <li>
                                <button onClick={removeHandler}>X</button>
                                <input type="checkbox" checked={task.isDone}
                                       onChange={onChangeStatusHandler}
                                />
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            ) }
            <div>
                <Button name={'All'} onClick={ ()=>{changeFilter('all')} }/>
                <Button name={'Active'} onClick={ ()=>{changeFilter('active')} }/>
                <Button name={'Completed'} onClick={ ()=>{changeFilter('completed')} }/>
            </div>
        </div>
    );
};
