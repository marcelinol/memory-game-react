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
        {[0, 4, 8].map((index, _) => {
          return (
            <tr key={index}>
              <td key={index}>
                <Card
                  id={cards[index].id}
                  image={cards[index].image}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 1}>
                <Card
                  id={cards[index + 1].id}
                  image={cards[index + 1].image}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 2}>
                <Card
                  id={cards[index + 2].id}
                  image={cards[index + 2].image}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 3}>
                <Card
                  id={cards[index + 3].id}
                  image={cards[index + 3].image}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
