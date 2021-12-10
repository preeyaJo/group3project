import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserScoreContext } from "../App";
import questionsArray from "../Quiz/questions_a.json";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function HighScore() {
  const { scoreContext } = React.useContext(UserScoreContext);

  // Lagrar highscore i simulering av server. -------------> TODO: Flytta till egen fil och använd fetch().
  const highScoreList = [
    { name: "Shara, N.", result: 10 },
    { name: "Alexandra, L.", result: 7 },
    { name: "David, G.", result: 8 },
    { name: "Jafar, A.", result: 9 },
    { name: "Anna, E.", result: scoreContext },
  ];

  // Tar bort alla resultat som är 0 så Anna inte syns i listan utan att ha gjort Quizet
  const filteredList = highScoreList.filter((listItems) => {
    return listItems.result != 0;
  });

  // Sorterar listan på resultat med högst värde överst
  const sortedList = filteredList.sort(function (a, b) {
    if (a.result > b.result) return -1;
  });

  // lägger varje person i vår array i ett element under varandra
  const showHighScore = sortedList.map((listItems, index) => (
    <span key={index}>
      {listItems.name} {listItems.result}/{questionsArray.length}
    </span>
  ));

  return (
    <div className="container">
      <GlobalHeader />
      <div className="Show-score QuizItem rounded text-center text-secondary d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-4">Highscore</h1>
        {showHighScore}

        <Link to="/quiz">
          <Button variant="outline-secondary" className="mt-4 Btn-quiz">
            Spela quiz
          </Button>
        </Link>
      </div>
      <BottomMenu />
    </div>
  );
}

export default HighScore;
