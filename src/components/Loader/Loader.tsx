import { FC, ReactNode } from 'react'
import styles from './Loader.module.scss'

interface Props {
    children: ReactNode
}

const Loader: FC<Props> = ({ children }) => {
    return (
        <>
            {children}
            <div className={styles.loader}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </>
    )
}

export default Loader