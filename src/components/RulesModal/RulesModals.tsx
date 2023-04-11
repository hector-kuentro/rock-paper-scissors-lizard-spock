import { FC } from 'react'
import styles from './RulesModals.module.scss'
import Image from '../Image/Image'
import icon from '../../assets/images/image-rules-bonus.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import Button from '../Buttons/Button'

interface Props {
    onClose: () => void
}

const RulesModals: FC<Props> = ({ onClose }) => {
    return (
        <div className={styles.container}>
            <div>
                <span>RULES</span>
            </div>

            <Image src={icon} />

            <Button
                variant='icon'
                onClick={onClose}
            >
                <Image src={closeIcon} />
            </Button>
        </div>
    )
}

export default RulesModals