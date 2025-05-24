import {createAction, createReducer} from "@reduxjs/toolkit";

const getInitialThemeMode = (): ThemeMode => {
    const savedTheme = localStorage.getItem('themeMode');
    return savedTheme === 'dark' ? 'dark' : 'light';
};

const initialState = {
    themeMode: getInitialThemeMode() as ThemeMode,
}

export const changeThemeModeAC = createAction<{themeMode: ThemeMode}>('app/changeThemeMode');

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeThemeModeAC, (state, action) => {
            state.themeMode = action.payload.themeMode
            // логика мутабельного изменения стейта при изменении темы
        })
})

export type ThemeMode = 'dark' | 'light'