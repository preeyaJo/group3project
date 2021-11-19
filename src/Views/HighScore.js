import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function HighScore() {
  return (
    <div>
      <h1>Highscore:</h1>
      <Link to="/quiz">
        <Button>Spela quizet</Button>
      </Link>
      <Link to="/cctopics">
        <Button>Läs mer om klimat</Button>
      </Link>
    </div>
  );
}

export default HighScore;