import { useState } from "react";
import "./App.css";

const numbers49 = [];

for (let i = 1; i < 50; i++) numbers49.push(i);

function App() {
  const [sixnumbers, setSixnumbers] = useState(new Array(6).fill(0));
  const [joker, setJoker] = useState(0);

  const handleGenerate = () => {
    const oldNumbers = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * numbers49.length);
      const randomNumber = numbers49[randomIndex];
      console.log(randomNumber);
      oldNumbers.push(randomNumber);
      numbers49.splice(randomIndex, 1);
    }

    setSixnumbers(oldNumbers);

    setJoker(Math.ceil(Math.random() * 10));
  };

  console.log(sixnumbers);

  return (
    <div className="App">
      <div className="allnumbers">
        <div className="sixnumbers">
          {sixnumbers.map((item, idx) => (
            <input key={idx} value={item} disabled />
          ))}

          {/* <input disabled />
          <input disabled />
          <input disabled />
          <input disabled />
          <input disabled />
          <input disabled /> */}
        </div>

        <div className="joker">
          <input value={joker} disabled />
        </div>
      </div>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}

export default App;
