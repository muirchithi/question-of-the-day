import React, { useState } from "react";
import "../App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <div className="progress-left">
        <div
          className="progress-bar"
          style={{ width: `${counter * 10}%` }}
        ></div>
      </div>
      <div className="progress-right">
        <div
          className="progress-bar"
          style={{ width: `${counter * 10}%` }}
        ></div>
      </div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;