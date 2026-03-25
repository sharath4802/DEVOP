import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";

function MainCricket() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const addRuns = (value) => {
    setRuns((prev) => prev + value);
  };

  const addWicket = () => {
    setWickets((prev) => prev + 1);
  };

  const reset = () => {
    setRuns(0);
    setWickets(0);
  };

  return (
    <div>
      <ScoreBoard runs={runs} wickets={wickets} />
      <Controls addRuns={addRuns} addWicket={addWicket} reset={reset} />
    </div>
  );
}

export default MainCricket;