import { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'

interface Props {
    children: ReactNode
    open?: boolean
    onClose: () => void
}

const Modal: FC<Props> = ({ children, open, onClose }) => {

    if(!open) return null

    return (
        <>
            <div className={styles.overlay} 
                onClick={onClose}
            />

            <div className={styles.modal}>
                {children}
            </div>
        </>
    )
}

export default Modal