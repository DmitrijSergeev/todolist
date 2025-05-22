import './App.css'
import {TodoListItem} from "../todolistItem/TodoListItem.tsx";
import {useState} from "react";
import {FilterValues, TaskState, Todolist} from "../types/Types.ts";
import {CreateItemForm} from "../CreateItemForm.tsx";
import {AppBar, createTheme, Paper, ThemeProvider, Toolbar} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import {NavButton} from "../button/NavButton.ts";
import {containerSx} from "../todolistItem/TodolistItem.styles.ts";
import {MenuIcon} from "lucide-react";
import Switch from '@mui/material/Switch'
import CssBaseline from '@mui/material/CssBaseline'
import {useSelector} from 'react-redux';
import {RootState} from "../app/store.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    createTodolistAC,
    deleteTodolistAC
} from "../model/todolists-reducer.ts";
import {changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC} from '../model/tasks-reducer.ts';

type ThemeMode = 'dark' | 'light'

function App() {

    const todolists = useSelector<RootState, Todolist[]>(state => state.todolists)
    const tasks = useSelector<RootState, TaskState>(state => state.tasks)

    const dispatch = useAppDispatch()
    // const [filter, setFilter] = useState<FilterValueType>('all')

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatch(changeTodolistFilterAC({id: todolistId, filter}))
    }

    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
    }

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

    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        const savedTheme = localStorage.getItem('themeMode');
        return savedTheme === 'dark' ? 'dark' : 'light'; // fallback to 'light'
    });

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            },
        },
    })

    const changeMode = () => {
        const newMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newMode);
        localStorage.setItem('themeMode', newMode);
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <AppBar position="static" sx={{mb: '30px'}}>
                    <Toolbar>
                        <Container maxWidth={'lg'} sx={containerSx}>
                            <IconButton color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            <div>
                                <NavButton color="inherit">Sign in</NavButton>
                                <NavButton color="inherit">Sign up</NavButton>
                                <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
                                <Switch color={'default'} onChange={changeMode} />
                            </div>
                        </Container>
                    </Toolbar>
                </AppBar>
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
            </div>
        </ThemeProvider>

    )
}

export default App
