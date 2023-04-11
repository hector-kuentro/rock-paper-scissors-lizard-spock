import { FC, ReactNode, useContext } from 'react'
import { Values } from '../../types/types'
import { MainContext } from '../../context/MainContext'
import scissorsIcon from '../../assets/images/icon-scissors.svg'
import rockIcon from '../../assets/images/icon-rock.svg'
import paperIcon from '../../assets/images/icon-paper.svg'
import lizardIcon from '../../assets/images/icon-lizard.svg'
import spockIcon from '../../assets/images/icon-spock.svg'
import clsx from 'clsx'
import styles from './OptionCard.module.scss'

interface OptionCardProps {
    value: Values
    isResult?: boolean
    victoryShadow?: boolean
    isPlaceholder?: boolean
}

interface OptionCardData {
    bgColor: string
    icon: ReactNode
}

const OptionCard: FC<OptionCardProps> = ({ value, isResult, victoryShadow, isPlaceholder }) => {

    const { chooseOption, loading } = useContext(MainContext)

    const data: OptionCardData = (() => {
        if (value === Values.SCISSORS) return {
            bgColor: 'scissors',
            icon: scissorsIcon,
        }
        if (value === Values.PAPER) return ({
            bgColor: 'paper',
            icon: paperIcon
        })
        if (value === Values.ROCK) return ({
            bgColor: 'rock',
            icon: rockIcon
        })
        if (value === Values.LIZARD) return ({
            bgColor: 'lizard',
            icon: lizardIcon,
        })
        if (value === Values.SPOCK) return ({
            bgColor: 'spock',
            icon: spockIcon,
        })
        return ({
            bgColor: 'rock',
            icon: rockIcon
        })
    })()

    function handleClick() {
        if (isResult) return

        chooseOption(value)
    }

    return (

        <div className={clsx(
            styles.optionCard,
            styles[data.bgColor],
            isResult && styles.isResult,
            isPlaceholder && styles.placeholder
        )}
            onClick={handleClick}
        >
            <div
                style={{
                    backgroundImage: `url(${data.icon})`
                }}
            >
            </div>

            {!isPlaceholder &&
                !loading &&
                isResult &&
                victoryShadow &&
                <span className={styles.victoryShadow} />
            }
        </div>
    )
}

export default OptionCard