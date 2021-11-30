import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";
import QuizList_a from "../Quiz/QuizItem_a";

export function Quiz() {
  return (
    <div className="container">
      <GlobalHeader />
      <QuizList_a />
      {/*Komponent för bottenmeny*/}
      <BottomMenu />
      <Link to="/result">
        <Button className="m-3">Resultat</Button>
      </Link>
    </div>
  );
}

export default Quiz;
