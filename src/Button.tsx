type Props = {
    name: string
    onClick?: ()=>void
}
export const Button = ({name, onClick}: Props) => {
    return (
        <button onClick={onClick}>
            {name}
        </button>
    );
};
