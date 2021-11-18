import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function QuizLobby() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to="/quiz">
        <Button>Spela</Button>
      </Link> 
      <Link to="/highscore">
        <Button>Highscore</Button>
      </Link> 
    </div>
  );
}

export default QuizLobby;