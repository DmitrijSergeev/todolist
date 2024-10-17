import {useState} from "react";

export const TodoList = () => {
    const [title, setTitle] = useState('')

    return (
        <div>
            <input
                value={title}
                onChange={ (e)=>{setTitle(e.currentTarget.value)} }
            />
        </div>
    );
};
