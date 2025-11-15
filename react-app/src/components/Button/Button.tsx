import styles from './Button.module.css';

interface Props {
    label: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}

const Button = ({label, color = "primary", onClick}: Props) => {
    return <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')}
                   onClick={onClick}>{label + ' (' + color + ')'}</button>;
}

export default Button;