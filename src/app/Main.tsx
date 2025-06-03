import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {CreateItemForm} from "../CreateItemForm.tsx";
import {Paper} from "@mui/material";
import {Todolist } from "../types/Types.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {changeTodolistFilterAC, createTodolistAC} from "../model/todolists-reducer.ts";
import { TodoListItem } from "../todolistItem/TodoListItem.tsx";
import { useAppSelector } from "../common/hooks/useAppSelector.ts";
import { selectTasks } from "../model/tasks-selectors.ts";
import {selectTodolists} from "../model/todolists-selectors.ts";

export const Main = () => {
    const tasks = useAppSelector(selectTasks)
    const todolists = useAppSelector(selectTodolists)
    const dispatch = useAppDispatch()

    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
    }

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatch(changeTodolistFilterAC({id: todolistId, filter}))
    }

    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{mb: '30px'}}>
                <CreateItemForm addItem={createTodolist}/>
            </Grid>
            <Grid container spacing={4}>
                {todolists.map((todolist: Todolist) => {
                    const todolistTasks = tasks[todolist.id]
                    let filteredTasks = todolistTasks
                    if (todolist.filter === 'active') {
                        filteredTasks = todolistTasks.filter(task => !task.isDone);
                    }
                    if (todolist.filter === 'completed') {
                        filteredTasks = todolistTasks.filter(task => task.isDone);
                    }

                    return (
                        <Grid key={todolist.id}>
                            <Paper sx={{p: '0 20px 20px 20px'}}>
                                <TodoListItem
                                    todolist={todolist}
                                    tasks={filteredTasks}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={createTask}
                                    changeTaskStatus={changeTaskStatus}
                                    onChangeTaskTitle={changeTaskTitle}
                                    deleteTodolist={deleteTodolist}
                                    onChangeTodolistTitle={changeTodolistTitle}
                                />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

