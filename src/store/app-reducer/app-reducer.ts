import {Dispatch} from "redux";

export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState

const initialState = {
    themeMode: 'dark' as ThemeMode,
}

export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'SET_THEME':
            return {...state, themeMode: action.themeMode}
        default:
            return state
    }
}

export const setThemeAC = (themeMode: ThemeMode) => {
    return {
        type: 'SET_THEME',
        themeMode
    } as const
}

export const setThemeTC = (newTheme: ThemeMode) => (dispatch: Dispatch) => {
    dispatch(setThemeAC(newTheme ))
    localStorage.setItem('themeMode', newTheme)
}
//updateFromLsTheme
export const changeThemeTC = () => (dispatch: Dispatch) => {
    const currentTheme = localStorage.getItem('themeMode')
    if (currentTheme) {
        dispatch(setThemeAC(currentTheme as ThemeMode))
    }
}

type SetThemeActionType = ReturnType<typeof setThemeAC>

type ActionsType = SetThemeActionType
