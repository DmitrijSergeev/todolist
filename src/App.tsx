import './App.css'
import {TodoList} from "./components/todolist/todoList";
import {changeThemeAC, changeThemeTC,} from "./store/app-reducer/app-reducer";
import {getTheme} from "./common/theme/theme";
import {useAppSelector} from "./common/hooks/useAppSelector";
import {useAppDispatch} from "./common/hooks/useAppDispatch";
import {CssBaseline, Switch, ThemeProvider} from "@mui/material";
import {useEffect} from "react";

function App() {

    const themeMode = useAppSelector(state => state.app.themeMode)
    const theme = getTheme(themeMode)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(changeThemeTC())
    }, [dispatch]);

    const changeModeHandler = () => {
        dispatch(changeThemeAC(themeMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme_key', themeMode)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Switch color={'default'} onChange={changeModeHandler}/>
                <TodoList/>
            </ThemeProvider>
        </>
    )
}

export default App
