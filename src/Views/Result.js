import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Result() {
  return (
    <div>
      <h1>Ditt resultat:</h1>
      <h2>5/10</h2>
      <Link to="/quiz">
        <Button>Spela igen</Button>
      </Link>
      <Link to="/cctopics">
        <Button>Läs mer om klimat</Button>
      </Link>
    </div>
  );
}

export default Result;