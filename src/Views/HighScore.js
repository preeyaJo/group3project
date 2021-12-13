import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserScoreContext } from "../App";
import questionsArray from "../Quiz/questions.json";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function HighScore() {
  // lagrar antal rätta svar från Quiz.
  const { scoreContext } = React.useContext(UserScoreContext);

  // Lagrar highscore i simulering av server. -------------> TODO: Flytta till egen fil och använd fetch().
  const highScoreList = [
    { name: "Shara, N.", result: 10 },
    { name: "Alexandra, L.", result: 7 },
    { name: "David, G.", result: 8 },
    { name: "Jafar, A.", result: 9 },
    { name: "Anna, E.", result: scoreContext },
  ];

  // Retunerar alla resultat som INTE är 0 vilket filtrerar bort användare som inte genomfört quiz ännu.
  const filteredList = highScoreList.filter((listItems) => {
    return listItems.result !== 0;
  });

  // Sorterar listan i fallande ordning
  const sortedList = filteredList.sort(function (a, b) {
    // if (a.result > b.result) return -1;
    return b.result - a.result;
  });

  // Sparar map() i en variabel att placera i JSX
  // lägger varje person i vår array highScoreList i ett element
  // questionsArray.length visar hur många möjliga poäng man kan få
  const showHighScore = sortedList.map((listItems, index) => (
    <span key={index}>
      {listItems.name} {listItems.result}/{questionsArray.length}
    </span>
  ));

  // retunerar JSX med map() som variabel showHighScore
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
