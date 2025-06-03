import type { RootState } from '../app/store'
import {TaskState} from "../types/Types.ts";

export const selectTasks = (state: RootState): TaskState => state.tasks