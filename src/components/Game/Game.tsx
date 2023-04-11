import { FC, useContext } from 'react'
import styles from './Game.module.scss'
import { Values } from '../../types/types'
import { MainContext } from '../../context/MainContext'
import GameResult from '../GameResult/GameResult'
import OptionCard from '../OptionCard/OptionCard'

const Game: FC = () => {

    const { selectedOption } = useContext(MainContext)

    if (selectedOption !== Values.UNDEFINED) return (
        <GameResult />
    )

    return (
        <div className={styles.gameContainer}>
            <section><OptionCard value={Values.SCISSORS} /></section>
            <section>
                <OptionCard value={Values.SPOCK} />
                <OptionCard value={Values.PAPER} />
            </section>
            <section>
                <OptionCard value={Values.LIZARD} />
                <OptionCard value={Values.ROCK} />
            </section>
        </div>
    )
}

export default Game