interface Props {
    label: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}

const Button = ({ label, color = "primary", onClick }: Props) => {
    return <button type="button" className={"btn btn-" + color} onClick={onClick}>{label}</button>;
}

export default Button;