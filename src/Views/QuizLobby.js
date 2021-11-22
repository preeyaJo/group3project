import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '../Components/BottomMenu'

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import GlobalHeader from "../Components/GlobalHeader";

export function QuizLobby() {
  return (
    <div>
      <GlobalHeader/>
      {/*Komponent för bottenmeny*/}
      <BottomMenu/>
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