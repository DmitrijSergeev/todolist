import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type Props = {
    value: string
    onChange: (title: string)=>void
}

export const EditableSpan = ({value, onChange}: Props) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [title, setTitle] = useState(value)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }

    const turnOnEditMode = () => {
        setIsEditMode(true)
    }

    const turnOffEditMode = () => {
        setIsEditMode(false)
        onChange(title)
    }

    return (
        <>
            {isEditMode ? (
                <TextField value={title}
                           onChange={onChangeHandler}
                           onBlur={turnOffEditMode}
                           autoFocus
                           variant="outlined"
                           size={'small'}
                />
            ):(
                <span onDoubleClick={turnOnEditMode}>{value}</span>
            ) }
        </>
    )
}
