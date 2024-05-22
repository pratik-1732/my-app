import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImg = [
  { src: "/images/Arya Stark.jpg", matched: false },
  { src: "/images/Daenerys Targaryen.jpg", matched: false },
  { src: "/images/Jaime.jpg", matched: false },
  { src: "/images/Jon Snow.jpg", matched: false },
  { src: "/images/Missandei.jpg", matched: false },
  { src: "/images/Night King.jpg", matched: false },
  { src: "/images/Tyrion.jpg", matched: false },
  { src: "/images/Cersei Lannister.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // cards shuffle
  const cardsShuffle = () => {
    const shuffleCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
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

  console.log(cards);
  // choices reset and increase turn count
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="App">
      <h1>Mind Game</h1>
      <button onClick={cardsShuffle}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
