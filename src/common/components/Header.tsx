import {AppBar, Toolbar} from "@mui/material";
import Container from "@mui/material/Container";
import {containerSx} from "../../todolistItem/TodolistItem.styles.ts";
import IconButton from "@mui/material/IconButton";
import {MenuIcon} from "lucide-react";
import {NavButton} from "../../button/NavButton.ts";
import Switch from "@mui/material/Switch";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "../../app/app-selectors.ts";
import {getTheme} from "../../common/theme/theme.ts";
import {changeThemeModeAC} from "../../app/app-reducer.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";

export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()
    const theme = getTheme(themeMode)

    const changeMode = () => {
        const newMode = themeMode === 'light' ? 'dark' : 'light';
        // setThemeMode(newMode);
        dispatch(changeThemeModeAC({themeMode: themeMode === 'light' ? 'dark' : 'light'}))
        localStorage.setItem('themeMode', newMode);
    }

    return (
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
                        <Switch color={'default'} onChange={changeMode}
                                checked={themeMode === 'dark'}
                        />
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
