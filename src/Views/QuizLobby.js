import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

export function QuizLobby() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to="/quiz">
        <button>Spela</button>
      </Link> 
      <Link to="/highscore">
        <button>Highscore</button>
      </Link> 
    </div>
  );
}

export default QuizLobby;