import { useEffect, useState } from "react";
import "./App.css";
import "./responsive.css";
import SingleCard from "./components/SingleCard";

const cardImg = [
  { src: "/images/stark sisters.png", matched: false },
  { src: "/images/danny.png", matched: false },
  // { src: "/images/Jaime.jpg", matched: false },
  { src: "/images/jon.png", matched: false },
  { src: "/images/misandei.png", matched: false },
  { src: "/images/Night kings.png", matched: false },
  { src: "/images/imp.png", matched: false },
  // { src: "/images/Cersei Lannister.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // cards shuffle
  const cardsShuffle = () => {
    const shuffleCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  // choice handling
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // card compairing
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  // choices reset and increase turn count
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  // start new game automatically
  useEffect(() => {
    cardsShuffle();
  }, []);

  return (
    <>
      <div className="content">
        <div className="name-btn">
          <h1>Mind Game</h1>
          <button onClick={cardsShuffle}>New Game</button>
          <p>Turns: {turns}</p>
        </div>

        <div className="App">
          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
