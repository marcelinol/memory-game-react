import React, { useEffect, useState } from 'react';

function Card({ id, image, handleClick, cardsFacingUp, resetCardsFacingUp }) {
  // TODO: Not using the CARD_STATES yet but they need to be documented somehow.
  const images = require.context('./images', true); // TODO: check why this is breaking the only test I have 👀
  const cardFrontImage = images(`./${image}.jpg`).default;
  const cardBackImage = images(`./cardBack.jpg`).default;
  //const cardNeutralImage = ... -> Add black block
  const [imagePath, setImagePath] = useState(cardBackImage);
  const [cardState, setCardState] = useState('faceDown');

  const flipCard = () => {
    if (cardsFacingUp === 2) {
      console.log('2 cards facing up already');
      return;
    }
    setImagePath(cardFrontImage);
    setCardState('faceUp');
    handleClick();
  };

  useEffect(() => {
    if (cardsFacingUp === 2 && cardState === 'faceUp') {
      setTimeout(() => {
        setImagePath(cardBackImage);
        setCardState('faceDown');
        resetCardsFacingUp();
      }, 2500);
    }
  }, [cardsFacingUp, cardState]);

  return (
    <img
      src={imagePath}
      alt="memory card"
      className="card"
      onClick={() => {
        flipCard();
      }}
    />
  );
}

export default Card;
