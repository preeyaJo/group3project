import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
/* 
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button"; */
import GlobalHeader from "../Components/GlobalHeader";
import QuizList from "../Quiz/QuizItem"; /* skall döpas om till QuizItem.js */

export function Quiz() {
  return (
    <div  className="container">
      <GlobalHeader />
    <div className="quizFix">
      
      <QuizList />
      
      
      {/*       <Link to="/result">
        <Button className="m-3">Resultat</Button>
      </Link> */}

    </div>
    {/*Komponent för bottenmeny*/}
    <BottomMenu />
    </div>
  );
}

export default Quiz;
