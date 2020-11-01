import React, { useState, useEffect } from 'react';
import Card from './Card';

function Table({ cards }) {
  const [cardsFacingUp, setCardsFacingUp] = useState(0);

  const handleClick = () => {
    setCardsFacingUp(cardsFacingUp + 1);
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
                  id={cards[index]}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 2}>
                <Card
                  id={cards[index + 1]}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 3}>
                <Card
                  id={cards[index + 2]}
                  handleClick={handleClick}
                  cardsFacingUp={cardsFacingUp}
                  resetCardsFacingUp={resetCardsFacingUp}
                />
              </td>
              <td key={index + 4}>
                <Card
                  id={cards[index + 3]}
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
