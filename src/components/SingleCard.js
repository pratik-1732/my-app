import "./SingleCard.css";

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
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
          style={{ height: "12rem", width: "12rem" }}
        />
      </div>
    </div>
  );
}
