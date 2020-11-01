import './App.css';
import Table from './Table';
import { shuffle } from './helper.js';

function App() {
  const cards = shuffle([
    { id: 0, image: 'saladFingers', matched: false },
    { id: 1, image: 'saladFingers', matched: false },
    { id: 2, image: 'bat', matched: false },
    { id: 3, image: 'bat', matched: false },
    { id: 4, image: 'pumpkin', matched: false },
    { id: 5, image: 'pumpkin', matched: false },
    { id: 6, image: 'vampire', matched: false },
    { id: 7, image: 'vampire', matched: false },
    { id: 8, image: 'skull', matched: false },
    { id: 9, image: 'skull', matched: false },
    { id: 10, image: 'witch', matched: false },
    { id: 11, image: 'witch', matched: false },
  ]);

  return (
    <div className="App">
      <h1>SPOOKY Memory Game</h1>
      <Table cards={cards} />
    </div>
  );
}

export default App;
