import React, { useState, useEffect } from 'react';
import Card from './Card';

function Table({ cards }) {
  const [cardsFacingUp, setCardsFacingUp] = useState(0);
  const [cardsRevealed, setCardsRevealed] = useState([]);

  const handleClick = () => {
    setCardsFacingUp(cardsFacingUp + 1);
    if (cardsRevealed.length === 2 && cardsRevealed[0] === cardsRevealed[1]) {
    }
    console.log('handling click');
    return;
  };

  const resetCardsFacingUp = () => setCardsFacingUp(0);

  useEffect(() => {
    console.log('cards facing up: ', cardsFacingUp);
  }, [cardsFacingUp]);

  return (
    <table>
      <tbody>
        <tr>
          {cards.slice(0, 4).map((card) => {
            const { id, image, matched } = card;
            return (
              <td key={id}>
                <Card
                  id={id}
                  image={image}
                  matched={matched}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
            );
          })}
        </tr>
        <tr>
          {cards.slice(4, 8).map((card) => {
            const { id, image, matched } = card;
            return (
              <td key={id}>
                <Card
                  id={id}
                  image={image}
                  matched={matched}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
            );
          })}
        </tr>
        <tr>
          {cards.slice(8, 12).map((card) => {
            const { id, image, matched } = card;
            return (
              <td key={id}>
                <Card
                  id={id}
                  image={image}
                  matched={matched}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
