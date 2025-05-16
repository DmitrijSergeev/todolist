import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {NavButton} from "./button/NavButton.ts";

type ThemeMode = 'dark' | 'light'

export const AppExample = () => {
    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

    // Чтение из localStorage при монтировании компонента
    useEffect(() => {
        const savedTheme = localStorage.getItem('themeMode') as ThemeMode
        if (savedTheme === 'dark' || savedTheme === 'light') {
            setThemeMode(savedTheme)
        }
    }, [])

    // Сохранение в localStorage при изменении темы
    useEffect(() => {
        localStorage.setItem('themeMode', themeMode)
    }, [themeMode])

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            },
        },
    })

    const changeMode = () => {
        setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" sx={{ mb: '30px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <NavButton>Sign in</NavButton>
                        <NavButton>Sign up</NavButton>
                        <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
                        <Switch color="default" onChange={changeMode} checked={themeMode === 'dark'} />
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
