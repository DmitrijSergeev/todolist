import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {CreateItemForm} from "../CreateItemForm.tsx";
import {Paper} from "@mui/material";
import {TaskState, Todolist } from "../types/Types.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import { createTodolistAC } from "../model/todolists-reducer.ts";
import { TodoListItem } from "../todolistItem/TodoListItem.tsx";
import { useAppSelector } from "../common/hooks/useAppSelector.ts";
import {ThemeMode} from "../app/app-reducer.ts";

export const Main = () => {
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()

    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
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
                                    removeTask={deleteTask}
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
function selectTasks(state: { tasks: TaskState; todolists: Todolist[]; app: { themeMode: ThemeMode; }; }): unknown {
    throw new Error("Function not implemented.");
}

