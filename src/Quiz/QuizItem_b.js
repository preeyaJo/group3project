import React, { Component } from "react";
import QuizData from "./questions_b.json";

export class QuizList_b extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quisEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current question index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };

  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    //Check if correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  componnentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  render() {
    return (
      <div>
        <p>Quiz b</p>
      </div>
    );
  }
}

export default QuizList_b;
