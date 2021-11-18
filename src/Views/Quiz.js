import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

export function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to="/result">
        <button>Resultat</button>
      </Link>
    </div>
  );
}

export default Quiz;