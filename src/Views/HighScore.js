import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';


export function HighScore() {
  return (
    <div>
      <h1>Highscore:</h1>
      <Link to="/quiz">
        <button>Spela quizet</button>
      </Link>
      <Link to="/cctopics">
        <button>Läs mer om klimat</button>
      </Link>
    </div>
  );
}

export default HighScore;