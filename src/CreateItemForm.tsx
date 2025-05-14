import {KeyboardEvent, useRef, useState} from "react";
import Button from "@mui/material/Button";

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
            <Button variant={'contained'} size={'small'} onClick={addItemHandler}>+</Button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
};
