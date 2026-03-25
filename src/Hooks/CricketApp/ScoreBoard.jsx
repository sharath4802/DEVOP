import React from "react";

function ScoreBoard({ runs, wickets }) {
  return (
    <div>
      <h2>🏏 Cricket Score Board</h2>
      <h3>Runs: {runs}</h3>
      <h3>Wickets: {wickets}</h3>
    </div>
  );
}

export default ScoreBoard;