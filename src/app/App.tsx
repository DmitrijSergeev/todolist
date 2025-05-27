import './App.css'
import {FilterValues, TaskState} from "../types/Types.ts";
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import {RootState} from "../app/store.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    deleteTodolistAC
} from "../model/todolists-reducer.ts";
import {changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC} from '../model/tasks-reducer.ts';
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {Header} from "../common/components/Header.tsx";
import {getTheme} from "../common/theme/theme.ts";
import {selectThemeMode} from "../app/app-selectors.ts";
import {Main} from "../app/Main.tsx";

function App() {
    const themeMode = useAppSelector(selectThemeMode)

    const theme = getTheme(themeMode)
    const todolists = useAppSelector(state => state.todolists)
    const tasks = useAppSelector<RootState, TaskState>(state => state.tasks)

    const dispatch = useAppDispatch()

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatch(changeTodolistFilterAC({id: todolistId, filter}))
    }

    // const createTodolist = (title: string) => {
    //     dispatch(createTodolistAC(title))
    // }

    const deleteTodolist = (todolistId: string) => {
        dispatch(deleteTodolistAC({id: todolistId}))
    }

    const changeTodolistTitle = (todolistId: string, title: string) => {
        dispatch(changeTodolistTitleAC({id: todolistId, title}))
    }

    const deleteTask = (todolistId: string, taskId: string) => {
        dispatch(deleteTaskAC({todolistId, taskId}))
    }

    const createTask = (todolistId: string, title: string) => {
        dispatch(createTaskAC({todolistId, title}))
    }

    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC({todolistId, taskId, isDone}))
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC({todolistId, taskId, title}))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <Header/>
                <Main/>
                {/*<Container maxWidth={'lg'}>*/}
                {/*    <Grid container sx={{mb: '30px'}}>*/}
                {/*        <CreateItemForm addItem={createTodolist}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid container spacing={4}>*/}
                {/*        {todolists.map((todolist: Todolist) => {*/}
                {/*            const todolistTasks = tasks[todolist.id]*/}
                {/*            let filteredTasks = todolistTasks*/}
                {/*            if (todolist.filter === 'active') {*/}
                {/*                filteredTasks = todolistTasks.filter(task => !task.isDone);*/}
                {/*            }*/}
                {/*            if (todolist.filter === 'completed') {*/}
                {/*                filteredTasks = todolistTasks.filter(task => task.isDone);*/}
                {/*            }*/}

                {/*            return (*/}
                {/*                <Grid key={todolist.id}>*/}
                {/*                    <Paper sx={{p: '0 20px 20px 20px'}}>*/}
                {/*                        <TodoListItem*/}
                {/*                            todolist={todolist}*/}
                {/*                            tasks={filteredTasks}*/}
                {/*                            removeTask={deleteTask}*/}
                {/*                            changeFilter={changeFilter}*/}
                {/*                            addTask={createTask}*/}
                {/*                            changeTaskStatus={changeTaskStatus}*/}
                {/*                            onChangeTaskTitle={changeTaskTitle}*/}
                {/*                            deleteTodolist={deleteTodolist}*/}
                {/*                            onChangeTodolistTitle={changeTodolistTitle}*/}
                {/*                        />*/}
                {/*                    </Paper>*/}
                {/*                </Grid>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </Grid>*/}
                {/*</Container>*/}
            </div>
        </ThemeProvider>

    )
}

export default App
