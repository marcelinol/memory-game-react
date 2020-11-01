import React, { useState } from 'react';

function Card(props) {
  const images = require.context('./images', true); // TODO: check why this is breaking the only test I have 👀
  const cardFrontImage = images(`./${props.id}.jpg`).default;
  const cardBackImage = images(`./cardBack.jpg`).default;

  const [displayClass, setDisplayClass] = useState('');
  const [image, setImage] = useState(cardBackImage);

  const flipImage = () => {
    setImage(cardFrontImage);
    const timer = setInterval(() => {
      setImage(cardBackImage);
    }, 2500);

    return () => clearInterval(timer);
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
