import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to="/result">
        <Button>Resultat</Button>
      </Link>
    </div>
  );
}

export default Quiz;