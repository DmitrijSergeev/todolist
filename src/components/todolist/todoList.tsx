import * as SelectRadix from "@radix-ui/react-select";
import {TodoLists} from "../../types/types";

export type TodoListsProps = {
    todoLists: TodoLists[]
}

export const TodoList = (props: TodoListsProps) => {
const {todoLists} = props
    return (
        <div>
            Hello World
            <ul>
                {todoLists.map( tl => {
                    return (
                        <li key={tl.id}>
                            {tl.title}
                        </li>
                    )
                })}
            </ul>
            <SelectRadix.Root
                name={'Hello'}
            >

            </SelectRadix.Root>
        </div>
    );
};
