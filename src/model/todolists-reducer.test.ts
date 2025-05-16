import {v1} from "uuid";
import {todolistsReducer} from "../model/todolists-reducer.ts";
import {Todolist} from "../types/Types.ts";
import {test, expect} from 'vitest'


test('correct todolist should be deleted', () => {
    const todolistId1 = v1();
    const todolistId2 = v1();

    const startState: Todolist[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ]

    const action = {
        type: 'delete_todolist',
        payload: {
            id: todolistId1,
        }
    } as const;

    const endState = todolistsReducer(startState, action);

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})