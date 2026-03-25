import React from "react";

function Controls({ addRuns, addWicket, reset }) {
  return (
    <div>
      <h3>Controls</h3>

      <button onClick={() => addRuns(1)}>1</button>
      <button onClick={() => addRuns(2)}>2</button>
      <button onClick={() => addRuns(3)}>3</button>
      <button onClick={() => addRuns(4)}>4</button>
      <button onClick={() => addRuns(6)}>6</button>

      <br /><br />

      <button onClick={addWicket}>Wicket</button>

      <br /><br />

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Controls;