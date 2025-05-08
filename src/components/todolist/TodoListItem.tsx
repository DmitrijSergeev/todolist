export type Props = {
    createTodoList: (title: string)=>void
}

const TodoListItem = (props: Props) => {

    const { createTodoList } = props;

    return (
        <div className={'border-2 border-gray-500 flex flex-col w-100 ml-5'}>
            <h1 className={'text-xl'}>What to learn?</h1>
            <div>
                <input className={`mt-4 border-2 border-gray-500 w-55`}
                />
                <button className={'w-6 border-2 border-gray-500'}
                        onClick={()=> createTodoList('Hello World!')}
                >+
                </button>
            </div>
            <ul>
                <li className={'pb-4'}>
                    <input type={'checkbox'} checked/>
                    <button className={'pl-2 cursor-pointer'}
                            type={'button'}
                    >
                        x
                    </button>
                    <span className={'pl-2'}>{'HTML&CSS'}</span>
                </li>
            </ul>

            <div className={'flex flex-row justify-evenly'}>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                        type={'button'}
                >
                    All
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                >
                    Completed
                </button>
                <button className={'border-2 border-gray-500 cursor-pointer ' +
                    'rounded-2xl w-30 bg-green-600'}
                >
                    Active
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;