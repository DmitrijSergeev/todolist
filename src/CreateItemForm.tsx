import {KeyboardEvent, useRef, useState} from "react";
import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox'

type Props = {
    addItem: (title: string) => void
}

export const CreateItemForm = ({addItem}: Props) => {
    const inputRef = useRef<HTMLInputElement|null>(null)

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
            <TextField
                inputRef={inputRef}
                label={'Enter a title'}
                variant={'outlined'}
                size={'small'}
                onKeyDown={onKeyDownHandler}
                error={!!error}
                helperText={error}
            />
            <IconButton onClick={addItemHandler} color={'primary'}>
                <AddBoxIcon />
            </IconButton>
        </div>
    );
};
