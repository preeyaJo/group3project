import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import QuizItem from "../Quiz/QuizItem";

export function Quiz() {
  return (
    <div>
      <QuizItem />s{/*Komponent för bottenmeny*/}
      <BottomMenu />
      <Link to="/result">
        <Button>Resultat</Button>
      </Link>
    </div>
  );
}

export default Quiz;
