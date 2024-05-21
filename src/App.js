import { useState } from "react";
import "./App.css";

const cardImg = [
  { src: "/images/Arya Stark.jpg" },
  { src: "/images/Daenerys Targaryen.jpg" },
  { src: "/images/Jaime.jpg" },
  { src: "/images/Jon Snow.jpg" },
  { src: "/images/Missandei.jpg" },
  { src: "/images/Night King.jpg" },
  { src: "/images/Theon.jpg" },
  { src: "/images/Tyrion.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // cards shuffle
  const cardsShuffle = () => {
    const shuffleCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Mind Game</h1>
      <button onClick={cardsShuffle}>New Game</button>
    </div>
  );
}

export default App;
