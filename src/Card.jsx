import React, { useEffect, useState } from 'react';

function Card({ id, handleClick, cardsFacingUp, resetCardsFacingUp }) {
  // TODO: Not using the CARD_STATES yet but they need to be documented somehow.
  const images = require.context('./images', true); // TODO: check why this is breaking the only test I have 👀
  const cardFrontImage = images(`./${id}.jpg`).default;
  const cardBackImage = images(`./cardBack.jpg`).default;
  //const cardNeutralImage = ... -> Add black block
  const [image, setImage] = useState(cardBackImage);
  const [cardState, setCardState] = useState('faceDown');

  const flipCard = () => {
    if (cardsFacingUp === 2) {
      console.log('2 cards facing up already');
      return;
    }
    setImage(cardFrontImage);
    setCardState('faceUp');
    handleClick();
  };

  useEffect(() => {
    if (cardsFacingUp === 2 && cardState === 'faceUp') {
      setTimeout(() => {
        console.log('timer ended');
        setImage(cardBackImage);
        setCardState('faceDown');
        resetCardsFacingUp();
      }, 2500);
    }
  }, [cardsFacingUp, cardState]);

  // useEffect(() => {
  //   const twoCardsAreFacingUp = false;
  //   if (cardState === 'faceUp' && twoCardsAreFacingUp) {
  //     const timer = setInterval(() => {
  //       console.log('inside the timer');
  //       const cardsMatch = false;
  //       if (cardsMatch) {
  //         // Should this be checked here? This is an interaction with another component, I feel like it should live in another layer
  //         setCardState('hidden');
  //         setDisplayClass('hidden=true');
  //         return;
  //       }
  //       console.log('setting image and card state to facedown');
  //       setImage(cardBackImage);
  //       setCardState('faceDown');
  //     }, 2500);

  //     return () => clearInterval(timer);
  //   } else {
  //     return;
  //   }
  // }, [cardState, cardBackImage]);

  return (
    <img
      src={image}
      alt="memory card"
      className="card"
      onClick={() => {
        flipCard();
      }}
    />
  );
}

export default Card;
