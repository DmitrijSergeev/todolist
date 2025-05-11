import {FilterValueType, Task} from "./types/Types.ts";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    removeTask:(taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
}

export const TodoListItem = (
    {tasks, title, removeTask, changeFilter}: Props ) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const removeHandler = () => {
                            removeTask(task.taskId)
                        }
                        return (
                            <li>
                                <button onClick={removeHandler}>X</button>
                                <input type="checkbox" checked={task.isDone} />
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
