import React, { useState } from "react";
import "../../App.css";
import "./VoteBar.css";

function App() {
  const [counterRight, setCounterRight] = useState(0);
  const [counterLeft, setCounterLeft] = useState(0);

  const handleIncrementRight = () => {
    setCounterRight(counterRight + 1);
  };

  const handleIncrementLeft = () => {
    setCounterLeft(counterLeft + 1);
  };

  return (
    <div className="App">
      <div className="progress-left">
        <div className="votebar-container-left">
          <div
            className="votebar"
            style={{ width: `${counterLeft * 10}%` }}
          ></div>
        </div>
      </div>
      <div className="progress-right">
        <div className="votebar-container-right">
          <div
            className="votebar"
            style={{ width: `${counterRight * 10}%` }}
          ></div>
        </div>
      </div>
      <button onClick={handleIncrementRight}>Yes</button>
      <button onClick={handleIncrementLeft}>No</button>
    </div>
  );
}

export default App;