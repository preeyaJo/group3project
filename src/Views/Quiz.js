import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import QuizListContainer from "../Quiz/QuizListContainer";
import GlobalHeader from "../Components/GlobalHeader";

export function Quiz() {
  return (
    <div>
      <GlobalHeader/>
      <QuizListContainer />
      {/*Komponent för bottenmeny*/}
      <BottomMenu />
      <Link to="/result">
        <Button>Resultat</Button>
      </Link>
    </div>
  );
}

export default Quiz;
