import {useState} from "react";

type Props = {
    value: string
    onChange: (title: string)=>void
}

export const EditableSpan = ({value, onChange}: Props) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [title, setTitle] = useState(value)

    const turnOnEditMode = () => {
        setIsEditMode(true)
        setTitle(title)
    }

    const turnOffEditMode = () => {
        setIsEditMode(false)
    }

    return (
        <>
            {isEditMode ? (
                <input value={value} onChange={onChange} onBlur={turnOffEditMode} autoFocus/>
            ):(
                <span onDoubleClick={turnOnEditMode}>{value}</span>
            ) }
        </>
    )
}
