import './App.css'
import Table from './Table.js'
import { shuffle } from './helper.js'

function App() {
  const cards = shuffle([
    'saladFingers',
    'saladFingers',
    'bat',
    'bat',
    'pumpkin',
    'pumpkin',
    'vampire',
    'vampire',
    'skull',
    'skull',
    'witch',
    'witch',
  ])

  return (
    <div className="App">
      <h1>SPOOKY Memory Game</h1>
      <Table cards={cards} />
    </div>
  );
}

export default App
