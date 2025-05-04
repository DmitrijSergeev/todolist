import {useRef, useState} from "react";
import {FilterType, Task} from "../../types/Types.ts";

type TodoListItemProps = {
    tasks: Task[]
    removeTask: (id: string)=>void
    addTask: (title: string)=>void
    filterTask: (filter: FilterType)=>void
}

const TodoListItem = (props: TodoListItemProps) => {
    const {tasks, removeTask, addTask, filterTask} = props;

    const [error, setError] = useState<string|null>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    const addHandler = () => {
        if (inputRef.current && inputRef.current.value !== '') {
            addTask(inputRef.current.value.trim())
            inputRef.current.value = ''
            setError(null)
        }else {
            setError('Введите задачу')
        }
    }

    const allHandler = () => {
        filterTask('all')
    }

    const activeHandler = () => {
        filterTask('active')
    }

    const completedHandler = () => {
        filterTask('completed')
    }

    return (
        <div className={'border-2 border-gray-500 flex flex-col w-100 ml-5'}>
            <h1 className={'text-xl'}>What to learn?</h1>
            <div>
                <input className={`mt-4 border-2 border-gray-500 w-55 ${error ? 'border-red-600' : ''}`}
                       type={'text'}
                       placeholder={'Enter...'}
                       ref={inputRef}
                />
                <button className={'w-6 border-2 border-gray-500'}
                        onClick={addHandler}
                >+
                </button>
                {error && <div className={'text-red-600'}>{error}</div>}
            </div>
            <ul>
                {tasks.map((t) => {
                    const removeHandler = () => {
                        removeTask(t.id)
                    }
                    return (
                        <li key={t.id} className={'pb-4'}>
                            <input type={'checkbox'} checked={t.isDone} />
                            <button className={'pl-2 cursor-pointer'}
                                    type={'button'}
                                    onClick={removeHandler}
                            >
                                x
                            </button>
                            <span className={'pl-2'}>{t.title}</span>
                        </li>
                    )
                })}
            </ul>

            <div className={'flex flex-row justify-evenly'}>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                        type={'button'}
                        onClick={allHandler}
                >
                    All
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                        onClick={completedHandler}
                >
                    Completed
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                        onClick={activeHandler}
                >
                    Active
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;