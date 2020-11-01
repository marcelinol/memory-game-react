import React, { useState, useEffect } from 'react';
import Card from './Card';

function Table({ cards, images }) {
  const cardBackImage = images('./cardBack.jpg').default;
  const cardNeutralImage = images('./neutral.jpg').default;

  const [cardsRevealed, setCardsRevealed] = useState([]);
  const [displayVictory, setDisplayVictory] = useState(false);

  const revealCard = (id, imageName) => {
    if (cardsRevealed.length === 2) {
      console.log('2 cards facing up already');
      return;
    }

    cards.find((c) => c.id === id).imagePath = images(`./${imageName}.jpg`).default;

    const newCardsRevealed = [...cardsRevealed, id];
    setCardsRevealed(newCardsRevealed);
  };

  useEffect(() => {
    if (cardsRevealed.length === 2) {
      setTimeout(() => {
        const firstCard = cards.find((c) => c.id === cardsRevealed[0]);
        const secondCard = cards.find((c) => c.id === cardsRevealed[1]);
        if (firstCard.imageName === secondCard.imageName) {
          firstCard.imagePath = cardNeutralImage;
          secondCard.imagePath = cardNeutralImage;
        } else {
          firstCard.imagePath = cardBackImage;
          secondCard.imagePath = cardBackImage;
        }
        setCardsRevealed([]);
      }, 1000);
    }
  }, [cardsRevealed]);

  useEffect(() => {
    const playableCards = cards.find((c) => c.imagePath !== cardNeutralImage);
    if (typeof playableCards === 'undefined') {
      setDisplayVictory(true);
      console.log('YOU WON');
    }
  });

  return (
    <div>
      {displayVictory ? <h2>YOU WON!!!</h2> : null}
      <table>
        <tbody>
          <tr>
            {cards.slice(0, 4).map((card) => {
              const { id, imageName, imagePath } = card;
              return (
                <td key={id}>
                  <Card
                    id={id}
                    onClick={revealCard}
                    imagePath={imagePath}
                    imageName={imageName}
                    disabledState={cardNeutralImage}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            {cards.slice(4, 8).map((card) => {
              const { id, imageName, imagePath } = card;
              return (
                <td key={id}>
                  <Card
                    id={id}
                    onClick={revealCard}
                    imagePath={imagePath}
                    imageName={imageName}
                    disabledState={cardNeutralImage}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            {cards.slice(8, 12).map((card) => {
              const { id, imageName, imagePath } = card;
              return (
                <td key={id}>
                  <Card
                    id={id}
                    onClick={revealCard}
                    imagePath={imagePath}
                    imageName={imageName}
                    disabledState={cardNeutralImage}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
