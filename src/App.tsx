import './App.css'
import {TodoList} from "./components/todolist/todoList";
import {setThemeTC, updateFromLocalStorageThemeTC,} from "./store/app-reducer/app-reducer";
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
        dispatch(updateFromLocalStorageThemeTC())
    }, [dispatch]);

    const changeModeHandler = () => {
        const newTheme =  themeMode === 'light' ? 'dark' : 'light'
        dispatch(setThemeTC(newTheme))
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Switch color={'default'}
                        onChange={changeModeHandler}
                        checked={themeMode === 'light' || false}
                />
                <TodoList/>
            </ThemeProvider>
        </>
    )
}

export default App
