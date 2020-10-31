const Card = ({ id }) => {
  const images = require.context('./images', true);
  return (
    <img src={images(`./${id}.jpg`).default} alt={id} className="card" />
  );
}

export default Card;
