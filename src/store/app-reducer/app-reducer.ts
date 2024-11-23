import {Dispatch} from "redux";

export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState

const initialState = {
    themeMode: 'light' as ThemeMode,
}
export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, themeMode: action.payload.themeMode}
        }
        default:
            return state
    }
}

export const changeThemeAC = (themeMode: ThemeMode) => ({
    type: 'CHANGE_THEME',
    payload: {
        themeMode
    }
}) as const

export const changeThemeTC = () => (dispatch: Dispatch)=> {
    const themeAsString = localStorage.getItem('theme_key')
    if (themeAsString){
        const newTheme = JSON.parse(themeAsString)
        dispatch(changeThemeAC(newTheme))
    }
}

type ChangeThemeActionType = ReturnType<typeof changeThemeAC>

type ActionsType = ChangeThemeActionType