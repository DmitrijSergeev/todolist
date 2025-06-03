import type { RootState } from '../app/store'
import {Todolist} from "../types/Types.ts";

export const selectTodolists = (state: RootState): Todolist[] => state.todolists