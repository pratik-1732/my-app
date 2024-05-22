import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          alt="card front"
          style={{ height: "12rem", width: "12rem" }}
        />

        <img
          className="back"
          src="/images/GOT cover photo.jpeg"
          alt="card back"
          onClick={handleClick}
          style={{ height: "12rem", width: "12rem" }}
        />
      </div>
    </div>
  );
}
