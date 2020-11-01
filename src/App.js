import './App.css';
import Table from './Table';
import { shuffle } from './helper.js';

function App() {
  const images = require.context('./images', true);
  const cardBackImage = images(`./cardBack.jpg`).default;
  const cards = shuffle([
    { id: 0, imageName: 'saladFingers', matched: false, imagePath: cardBackImage },
    { id: 1, imageName: 'saladFingers', matched: false, imagePath: cardBackImage },
    { id: 2, imageName: 'bat', matched: false, imagePath: cardBackImage },
    { id: 3, imageName: 'bat', matched: false, imagePath: cardBackImage },
    { id: 4, imageName: 'pumpkin', matched: false, imagePath: cardBackImage },
    { id: 5, imageName: 'pumpkin', matched: false, imagePath: cardBackImage },
    { id: 6, imageName: 'vampire', matched: false, imagePath: cardBackImage },
    { id: 7, imageName: 'vampire', matched: false, imagePath: cardBackImage },
    { id: 8, imageName: 'skull', matched: false, imagePath: cardBackImage },
    { id: 9, imageName: 'skull', matched: false, imagePath: cardBackImage },
    { id: 10, imageName: 'witch', matched: false, imagePath: cardBackImage },
    { id: 11, imageName: 'witch', matched: false, imagePath: cardBackImage },
  ]);

  return (
    <div className="App">
      <h1>SPOOKY Memory Game</h1>
      <Table cards={cards} images={images} />
    </div>
  );
}

export default App;
