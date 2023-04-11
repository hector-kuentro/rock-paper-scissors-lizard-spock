import Game from './components/Game/Game'
import { RulesButton } from './components/RulesButton/RulesButton'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

function App() {

  return (
    <>
      <ScoreBoard />

      <Game />

      <RulesButton />
    </>
  )
}

export default App
