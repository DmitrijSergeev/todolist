import {TaskState} from "./types/Types.ts";

type Actions = {
    type: string;
    payload: string;
}

// const action: Actions = {
//     type: 'delete-task',
//     payload: {
//         taskId: v1(),
//     }
// }

export const tasksReducer = (state: TaskState, action: Actions): TaskState => {
    switch (action.type) {
        case 'delete_task':{
            return state
        }
           default:
               return state;
    }
}