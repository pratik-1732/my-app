import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          alt="card front"
          // style={{ height: "10rem", width: "10rem" }}
        />

        <img
          className="back"
          src="/images/cover img.png"
          alt="card back"
          onClick={handleClick}
          // style={{ height: "10rem", width: "10rem" }}
        />
      </div>
    </div>
  );
}
