import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: themeMode === 'light' ? 'light' : 'dark',
        primary: {
            main: '#087EA4',
        },
    },
})