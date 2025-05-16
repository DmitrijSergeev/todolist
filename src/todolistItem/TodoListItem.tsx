import {FilterValues, Task, Todolist} from "../types/Types.ts";
import {ChangeEvent} from "react";
import {CreateItemForm} from "../CreateItemForm.tsx";
import {EditableSpan} from "../EditableSpan.tsx";
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from "@mui/material/Button";
import {Box, Checkbox, List, ListItem} from "@mui/material";
import {containerSx, getListItemSx} from "../todolistItem/TodolistItem.styles.ts";

type Props = {
    todolist: Todolist
    tasks: Task[]
    removeTask: (id: string, taskId: string) => void
    changeFilter: (todoId: string, filter: FilterValues) => void
    addTask: (id: string, title: string) => void
    changeTaskStatus: (id: string, taskId: string, isDone: boolean) => void
    onChangeTaskTitle: (id: string, taskId: string, title: string) => void
    deleteTodolist: (id: string) => void
    onChangeTodolistTitle: (todoId: string, title: string) => void
}

export const TodoListItem = (
    {
        tasks,
        removeTask,
        changeFilter,
        addTask,
        onChangeTodolistTitle,
        changeTaskStatus,
        onChangeTaskTitle,
        deleteTodolist,
        todolist: {id, title, filter}
    }: Props) => {

    const addTaskHandler = (title: string) => {
        addTask(id, title)
    }

    const deleteHandler = () => {
        deleteTodolist(id)
    }

    const changeTodolistTitleHandler = (title: string) => {
        onChangeTodolistTitle(id, title)
    }

    const changeFilterHandler = (filter: FilterValues) => {
        changeFilter(id, filter)
    }

    return (
        <div>
            <div className={'container'}>
                <h3>
                    <EditableSpan value={title} onChange={changeTodolistTitleHandler}/>
                </h3>
                <IconButton onClick={deleteHandler}>
                    <DeleteIcon/>
                </IconButton>
            </div>
            <CreateItemForm addItem={addTaskHandler}/>
            {tasks.length === 0 ? (
                <p style={{color: 'red'}}>Тасок нет</p>
            ) : (
                <List>
                    {tasks.map(task => {
                        const removeHandler = () => {
                            removeTask(id, task.taskId)
                        }
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(id, task.taskId, e.currentTarget.checked)
                        }
                        const onChangeTitleHandler = (title: string) => {
                            onChangeTaskTitle(id, task.taskId, title)
                        }
                        return (
                            <ListItem key={task.taskId}
                                      sx={getListItemSx(task.isDone)}
                            >
                                <div>
                                    <Checkbox checked={task.isDone}
                                              onChange={onChangeStatusHandler}
                                    />
                                    <EditableSpan value={task.title}
                                                  onChange={onChangeTitleHandler}/>
                                </div>
                                <IconButton onClick={removeHandler}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItem>
                        )
                    })}
                </List>
            )}
            <div>
                <Button variant={filter === 'all' ? 'outlined' : 'text'}
                        color={'inherit'}
                        onClick={() => changeFilterHandler('all')}>
                    All
                </Button>
                <Button variant={filter === 'active' ? 'outlined' : 'text'}
                        color={'primary'}
                        onClick={() => changeFilterHandler('active')}>
                    Active
                </Button>
                <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                        color={'secondary'}
                        onClick={() => changeFilterHandler('completed')}>
                    Completed
                </Button>
            </div>
            <Box sx={containerSx}></Box>
        </div>
    );
};
