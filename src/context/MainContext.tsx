import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Values } from '../types/types'

interface Props {
    children: ReactNode
}

interface ContextModel {
    score: number
    highScore: number
    selectedOption: Values
    houseOption: Values
    isVictory: boolean
    isTie: boolean
    loading: boolean
    chooseOption: (value: Values) => void
    restartGame: () => void
}

const initState: ContextModel = {
    score: 0,
    highScore: 0,
    selectedOption: Values.UNDEFINED,
    houseOption: Values.UNDEFINED,
    isVictory: false,
    isTie: false,
    loading: false,
    chooseOption: () => { },
    restartGame: () => { },
}

function getRandomNumber() {
    return Math.ceil(Math.random() * 5)
}

const RESULTS: Record<Values, Array<Values>> = {
    [Values.SCISSORS]: [Values.PAPER, Values.LIZARD],
    [Values.PAPER]: [Values.ROCK, Values.SPOCK],
    [Values.ROCK]: [Values.SCISSORS, Values.LIZARD],
    [Values.LIZARD]: [Values.SPOCK, Values.PAPER],
    [Values.SPOCK]: [Values.SCISSORS, Values.ROCK],
    [Values.UNDEFINED]: [],
}

export const MainContext = createContext<ContextModel>(initState)

const MainContextProvider: FC<Props> = ({ children }) => {

    const [score, setScore] = useState(()=>{
        const item = localStorage.getItem('score')
        return item ? parseInt(item) : initState.score
    })
    const [highScore, setHighScore] = useState(()=>{
        const item = localStorage.getItem('highScore')
        return item ? parseInt(item) : initState.highScore
    })
    const [selectedOption, setSelectedOption] = useState(initState.selectedOption)
    const [houseOption, setHouseOption] = useState(initState.houseOption)
    const [isVictory, setIsVictory] = useState(initState.isVictory)
    const [isTie, setIsTie] = useState(initState.isTie)
    const [loading, setLoading] = useState(initState.loading)

    function saveInLocalStorage(key: string, value: string){
        localStorage.setItem(key, value)
    }

    function addScore() {
        const newScore = score + 1
        setScore(newScore)
        saveInLocalStorage('score', `${newScore}`)
        if(newScore > highScore){
            setHighScore(newScore)
            saveInLocalStorage('highScore', `${newScore}`)
        }
    }

    function removeScore() {
        const newScore = score - 1
        setScore(newScore)
        saveInLocalStorage('score', `${newScore}`)
    }

    function chooseRandomOption(value: Values) {
        setLoading(true)
        const number = getRandomNumber()
        setHouseOption(number)

        setTimeout(() => {
            const isTie = value === number
            setIsTie(isTie)
            if (isTie) {
                setLoading(false)
                return
            }

            const isVictory = RESULTS[value].indexOf(number) !== -1
            setIsVictory(isVictory)
            setLoading(false)

            if(isVictory){
                addScore()
                return
            }

            if(score === 0) return

            removeScore()
        }, 2000)
    }

    function chooseOption(value: Values) {
        setSelectedOption(value)
        chooseRandomOption(value)
    }

    function restartGame() {
        setSelectedOption(Values.UNDEFINED)
        setHouseOption(Values.UNDEFINED)
    }

    return (
        <MainContext.Provider value={{
            score, selectedOption, chooseOption, houseOption,
            isVictory, restartGame, isTie, loading, highScore
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider