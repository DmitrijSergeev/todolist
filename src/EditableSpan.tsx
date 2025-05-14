import {ChangeEvent, useState} from "react";

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
                <input value={title} onChange={onChangeHandler} onBlur={turnOffEditMode} autoFocus/>
            ):(
                <span onDoubleClick={turnOnEditMode}>{value}</span>
            ) }
        </>
    )
}
