import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

export function Result() {
  return (
    <div>
      <h1>Ditt resultat:</h1>
      <h2>5/10</h2>
      <Link to="/quiz">
        <button>Spela igen</button>
      </Link>
      <Link to="/cctopics">
        <button>Läs mer om klimat</button>
      </Link>
    </div>
  );
}

export default Result;