import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import questionsArray from "./questions.json";
import { UserScoreContext } from "../App";

function QuizList() {
  // sparar möjligheten att ändra "state scoreContext"
  // varje gång vi klickar på ett svar uppdateras även scoreContext med det nya värdet i handleButtonClick().
  const { setScoreContext } = React.useContext(UserScoreContext);

  const nrOfQuestions = questionsArray.length; // sparar antalet antal frågor i vår array.
  const [currentQuestion, setCurrentQuestion] = useState(0); //räknare som bestämmer vilken fråga som visas i questions-array
  const [score, setScore] = useState(0); //räknare som börjar på 0

  // innehållet läggs i en false/true-logik
  // {true/false ? (visas om true) : (visas om false)}
  // false byts ut mot true i state showScore när vi svarar på sista frågan
  const [showScore, setShowScore] = useState(false);

  // återställer alla state till första värdet med onClick på knappen i <div.Show-score>
  // Hade varit bättre med useEffect?
  const resetQuiz = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Varje gång vi klickar på en svarsknapp
  const handleButtonClick = (isCorrect) => {
    // om questions.answerOption.isCorrect är true så ökar vi state sccore med +1
    if (isCorrect === true) {
      const newscore = score + 1;
      setScore(newscore);

      // Skickar score det till den state som sparar userScoreContext
      setScoreContext(newscore);
    } // inget else eftersom vi alltid vill att nästa(nedan) bit kod körs

    // räknar upp +1 onClick
    const nextQuestion = currentQuestion + 1;

    // om nextQuestion är mindre än antal frågor är det ok att uppdatera index till nästa fråga
    if (nextQuestion < questionsArray.length) {
      // sätter räknaren till det nya värdet
      setCurrentQuestion(nextQuestion);
    } else {
      // om nextQuestion INTE är mindre än antal frågor är Quizen slut och då ändrar vi "setScore ?" till true
      // true i setScore visar innehållet i första parantesen i vår bolean {const ? (if true): (if false) }
      setShowScore(true);
    }
  };

  // setScore {statement ? (if true): (if false) } visar innehållet i andra parantesen tills vi klickar på svar i sista frågan.
  // efter sista fråga ändras showScore till true och innehållet i försa parantesen visas.
  return (
    <div>
      {showScore ? (
        <div className="Show-score QuizItem rounded text-center d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-secondary">
            Du fick {score} av {nrOfQuestions} rätt
          </h2>
          <div>
            <Button
              onClick={resetQuiz}
              variant="outline-secondary"
              className="m-2 Btn-quiz Btn-quiz--option"
            >
              Spela igen
            </Button>
            <Link to="./highscore">
              <Button
                variant="outline-secondary"
                className="m-2 Btn-quiz Btn-quiz--option"
              >
                Highscore
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="QuizItem rounded text-secondary p-4">
          <img
            src={questionsArray[currentQuestion].quizImage}
            alt="A pointy tower"
            className=" my-3 quizImage"
          />
          <h2 className="">
            Fråga {currentQuestion + 1}
            <span className="nrOfQuestions"> /{nrOfQuestions}</span>
          </h2>
          <div className="py-3">
            <p>{questionsArray[currentQuestion].questionText}</p>
          </div>
          <div className="d-flex flex-column justify-content-center ">
            {questionsArray[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Button
                  onClick={() => handleButtonClick(answerOption.isCorrect)}
                  variant="outline-secondary"
                  className="my-2 Btn-quiz"
                  key={index}
                  size="sm"
                >
                  {answerOption.answerText}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizList;
