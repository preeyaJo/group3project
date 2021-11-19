import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '../Components/BottomMenu'

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Quiz() {
  return (
    <div>
      <BottomMenu/>
      <h1>Quiz</h1>
      <Link to="/result">
        <Button>Resultat</Button>
      </Link>
    </div>
  );
}

export default Quiz;