import { FC, useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styles from './ScoreBoard.module.scss'
import Image from '../Image/Image'
import logo from '../../assets/images/logo-bonus.svg'

const ScoreBoard: FC = () => {

    const { score, highScore } = useContext(MainContext)

    return (
        <div className={styles.boardContainer}>
            <div className={styles.titleContainer}>
                <Image src={logo} />
            </div>

            <div className={styles.scoreContainer}>
                <span>SCORE</span>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default ScoreBoard