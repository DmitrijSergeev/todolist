import {useState} from "react";
import {TodoLists} from "../../types/types.ts";

type TodoListProps = {
    todos: TodoLists
    changeTitle: (title: string)=>void
}

export const TodoList = (props: TodoListProps) => {
    const {changeTitle, todos} = props

    const [item, setItem] = useState('')
    const [error, setError] = useState<null|string>(null)


    const changeItemHandler = () => {
        if (item.trim() !== ''){
            changeTitle(item.trim())
            setItem('')
        }else {
            setError('Title is required')
        }
    }

    return (
        <div>
            <div>
                {todos.title}
            </div>
            <button onClick={changeItemHandler}>+</button>
            <input
                value={item}
                onChange={(e) => {
                    setItem(e.currentTarget.value)
                }}
            />
            {error && <div>{error}</div> }
        </div>
    );
};
