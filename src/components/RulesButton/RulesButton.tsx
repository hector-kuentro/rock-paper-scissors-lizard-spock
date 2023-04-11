import { FC, useState } from 'react'
import Button from '../Buttons/Button'
import styles from './RulesButton.module.scss'
import Modal from '../Modal/Modal'
import RulesModals from '../RulesModal/RulesModals'

export const RulesButton: FC = () => {

    const [open, setOpen] = useState(false)

    function toggleModal() {
        setOpen(prev => !prev)
    }

    return (
        <>
            <div className={styles.buttonContainer}>
                <Button
                    onClick={toggleModal}
                >
                    RULES
                </Button>
            </div>


            <Modal
                open={open}
                onClose={toggleModal}
            >
                <RulesModals
                    onClose={toggleModal}
                />
            </Modal>
        </>
    )
}
