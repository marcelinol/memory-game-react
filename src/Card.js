import React, { useState } from 'react';

function Card(props) {
  const images = require.context('./images', true);
  const cardFrontImage = images(`./${props.id}.jpg`).default;
  const cardBackImage = images(`./cardBack.jpg`).default;

  const [displayClass, setDisplayClass] = useState('');
  const [image, setImage] = useState(cardBackImage);

  const flipImage = () => {
    setImage(cardFrontImage);
    setInterval(() => {
      setImage(cardBackImage);
    }, 2500);
  };

  return (
    <img
      src={image}
      alt="memory card"
      className={`card ${displayClass}`}
      onClick={() => {
        flipImage();
      }}
    />
  );
}

export default Card;
