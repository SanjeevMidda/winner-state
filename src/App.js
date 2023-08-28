import { useState } from "react";
import "./index.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className="increaseContainer">
        <h1
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </h1>
        <h1
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </h1>
      </div>

      {number > 5 ? <h1>You Win!!! 🎉</h1> : <h3>{number}</h3>}
    </div>
  );
}

export default App;
