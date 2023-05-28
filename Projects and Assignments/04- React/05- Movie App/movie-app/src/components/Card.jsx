const Card = ({ cardData }) => {
  return (
    <div>
      <img
        src={cardData.Poster}
        alt="poster"
        className="rounded-md h-96 w-full"
      />
    </div>
  );
};

export default Card;
