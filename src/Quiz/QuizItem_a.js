import React, { useState } from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import questions from "./questions_a.json";

function QuizList_a() {
  const nrOfQuestions = questions.length; // antal frågor
  const [currentQuestion, setCurrentQuestion] = useState(0); //räknare som börjar på 0
  const [score, setScore] = useState(0); //räknare som börjar på 0

  // innehållet läggs i en false/true-logik
  // {false ? (visas om true) : (visas om false)}
  // false byts ut mot state showScore
  const [showScore, setShowScore] = useState(false);

  //återställer alla state till första värdet med onClick på knappen i showScore===true
  const resetQuiz = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Varje gång vi klickar på en knapp
  const handleButtonClick = (isCorrect) => {
    // om questions.answerOption.isCorrect är true så ökar vi state sccore med +1
    if (isCorrect === true) {
      const newscore = score + 1;
      setScore(newscore);
    }
    // inget else eftersom vi alltid vill att nästa bit kod körs

    // räknar upp +1 onClick
    const nextQuestion = currentQuestion + 1;

    // om nextQuestion är mindre än antal frågor är det ok att uppdatera index till nästa fråga
    if (nextQuestion < questions.length) {
      // sätter räknaren till det nya värdet
      setCurrentQuestion(nextQuestion);
    } else {
      // om nextQuestion INTE är mindre än antal frågor är Quizen slut och då ändrar vi setScore till true
      // true i setScore visar innehålet i första parantesen i vår bolean {const ? (if true): (if false) }
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="QuizItem score-card rounded p-4 text-center d-flex flex-column justify-content-center">
          <h2>
            Du fick {score} av {nrOfQuestions} rätt
          </h2>
          <Button onClick={resetQuiz} variant="outline-light" className="my-2">
            Spela igen
          </Button>
        </div>
      ) : (
        <div className="QuizItem rounded p-4">
          <h2>
            Fråga {currentQuestion + 1} /{nrOfQuestions}
          </h2>
          <div className="py-3">
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div className="d-flex flex-column justify-content-center ">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Button
                  onClick={() => handleButtonClick(answerOption.isCorrect)}
                  variant="outline-light"
                  className="my-2"
                  key={index}
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

export default QuizList_a;

/*         <Button variant="outline-light" className="m-1">
          {post.answerOptions.answerText}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt2}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt3}
        </Button> */
