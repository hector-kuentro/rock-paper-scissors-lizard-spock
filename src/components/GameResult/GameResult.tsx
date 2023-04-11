import { FC, useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styles from './GameResult.module.scss'
import Button from '../Buttons/Button'
import OptionCard from '../OptionCard/OptionCard'
import { useIsMobile } from '../../hooks/hooks'
import clsx from 'clsx'
import Loader from '../Loader/Loader'

const GameResult: FC = () => {

    const { selectedOption, houseOption, isVictory, isTie, loading } = useContext(MainContext)

    const isMobile = useIsMobile()

    if (isMobile) return (
        <div className={styles.resultContainer}>
            <section>
                <div className={styles.optionContainer}>
                    <span>YOU PICKED</span>

                    <OptionCard
                        value={selectedOption}
                        isResult
                        victoryShadow={!isTie && isVictory}
                    />
                </div>

                <div className={styles.optionContainer}>
                    <span>{loading ? <Loader>PICKING</Loader> : 'THE HOUSE PICKED'}</span>
                    <OptionCard
                        value={houseOption}
                        isResult
                        victoryShadow={!isTie && !isVictory}
                        isPlaceholder={loading}
                    />
                </div>
            </section>

            <InfoCotnainer />
        </div>
    )

    return (
        <div className={clsx(styles.resultContainer, loading && styles.collapsed)}>
            <div className={styles.optionContainer}>
                <span>YOU PICKED</span>

                <OptionCard
                    value={selectedOption}
                    isResult
                    victoryShadow={!isTie && isVictory}
                />
            </div>

            <InfoCotnainer />

            <div className={styles.optionContainer}>
                <span>{loading ? <Loader>PICKING</Loader> : 'THE HOUSE PICKED'}</span>
                <OptionCard
                    value={houseOption}
                    isResult
                    victoryShadow={!isTie && !isVictory}
                    isPlaceholder={loading}
                />
            </div>
        </div>
    )
}

const InfoCotnainer: FC = () => {

    const { isTie, isVictory, restartGame, loading } = useContext(MainContext)

    return (
        <div className={clsx(styles.infoContainer, loading && styles.hidden)}>
            <span>{
                isTie
                    ? 'TIE'
                    : isVictory
                        ? 'YOU WIN'
                        : 'YOU LOSE'
            }</span>

            <Button
                variant='filled'
                onClick={restartGame}
            >
                PLAY AGAIN
            </Button>
        </div>
    )
}

export default GameResult