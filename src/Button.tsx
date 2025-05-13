type Props = {
    name: string
    onClick?: ()=>void
    className?: string
}
export const Button = ({name, onClick, className}: Props) => {
    return (
        <button onClick={onClick} className={className}>
            {name}
        </button>
    );
};
