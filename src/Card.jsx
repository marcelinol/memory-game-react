import React from 'react';

function Card({ id, onClick, imagePath, imageName, disabledState }) {
  return (
    <img
      src={imagePath}
      alt="memory card"
      className="card"
      onClick={() => {
        if (imagePath !== disabledState) {
          onClick(id, imageName);
        }
      }}
    />
  );
}

export default Card;
