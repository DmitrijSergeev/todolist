import {KeyboardEvent, useRef, useState} from "react";
import {Button} from "./Button.tsx";

type Props = {
    addItem: (title: string)=>void
}

export const CreateItemForm = ({addItem}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<null | string>(null)

    const addItemHandler = () => {

        if (inputRef.current && inputRef.current.value.trim() !== '') {
            addItem(inputRef.current.value)
            inputRef.current.value = ''
            setError(null)
        } else {
            setError('Title is required')
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItemHandler()
        }
    }
    return (
        <div>
            <input ref={inputRef}
                   onKeyDown={onKeyDownHandler}
                   className={error ? 'error' : ''}
            />
            <Button name={'+'}
                    onClick={addItemHandler}
            />
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
};
