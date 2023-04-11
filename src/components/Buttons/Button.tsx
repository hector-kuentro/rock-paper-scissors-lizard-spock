import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import styles from './Buttons.module.scss'

type Variants = 'filled' | 'outlined' | 'icon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants
}

const Button: FC<Props> = ({ children, variant, ...props }) => {
    if(variant === 'icon') return (
        <button
            className={clsx(styles.iconButton, props.className)}
            {...props}
        >
            {children}
        </button>
    )
    
    if(variant === 'filled') return (
        <button
            className={clsx(styles.filled, props.className)}
            {...props}
        >
            {children}
        </button>
    )
    
    return (
        <button
            className={clsx(styles.outlined, props.className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button