const Card = ({ id }) => {
  const images = require.context('./images', true);
  // <img src={images(`./${id}.jpg`).default} alt={id} className="card" />
  return (
    <img src={images(`./cardBack.jpg`).default} alt="memory card" className="card" />
  );
}

export default Card;
