import {Task} from "../../App";

type TodoListItemProps = {
    tasks: Task[]
}

const TodoListItem = (props: TodoListItemProps) => {
    const {tasks} = props;
    return (
        <div>
            <h1 className={'text-xl'}>What to learn?</h1>
            <div>
                <input className={'mt-4 border-2 border-gray-500'}
                       type={'text'}
                       placeholder={'Enter...'}
                />
                <button className={'w-6 border-2 border-gray-500'}>+</button>
            </div>
            <ul className={'flex flex-col justify-start list-none mt-6 p-2'}>
                {tasks.map((t) => {
                    return (
                        <li key={t.id} className={'pb-4'}>
                            <input type={'checkbox'} checked={t.isDone} />
                            <button className={'pl-2 cursor-pointer'}
                                    type={'button'}
                            >
                                x
                            </button>
                            <span className={'pl-2'}>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={'flex flex-row justify-evenly items-center pt-14'}
            >
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-35 bg-green-600'}
                        type={'button'}
                >
                    All
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-35 bg-green-600'}>
                    Completed
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-35 bg-green-600'}>
                    Active
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;