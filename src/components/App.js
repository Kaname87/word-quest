import React, { Component } from "react";

import GameStart from "./GameStart";
import GameOngoing from "./GameOngoing";
import GameResult from "./GameResult";

import Main from "./layout/Main";
import GameContext from "../contexts/GameContext";
import { ANSWER_TYPE } from "../constants/constants";
import quizzes from "../data/quiz";

const player = {
  name: "Beginner",
  level: 1,
  hp: 5,
  mp: 4,
  exp: 0
};

class App extends Component {
  selectAnswer = (targetWord, selectedOption) => {
    const isCorrect = selectedOption.isCorrect;
    const answerType = isCorrect ? ANSWER_TYPE.CORRECT : ANSWER_TYPE.WRONG;

    this.setState(prevState => {
      if (prevState.answerHistory.length > prevState.currentIdx) {
        return;
      }

      const hp = isCorrect ? prevState.hp : prevState.hp - 2;
      const message = isCorrect ? "Correct!" : "Wrong!";
      const selectedAnswer = { targetWord, ...selectedOption };

      const isDefeated = hp <= 0;

      return {
        isAnswered: true,
        isDefeated,
        hp,
        message,
        answerType,
        answerHistory: [...prevState.answerHistory, selectedAnswer]
      };
    });

    setTimeout(this.showNext, 1000);
  };

  showNext = () => {
    this.setState(prevState => {
      const currentIdx = prevState.currentIdx + 1;
      if (prevState.answerHistory.length !== currentIdx) {
        return;
      }

      const isFinished = currentIdx >= prevState.quizzes.length;

      return {
        answerType: ANSWER_TYPE.NOT_YET,
        message: "What does this word mean in Tagalog?",
        currentIdx,
        isFinished,
        currentQuiz: isFinished
          ? prevState.quizzes[0]
          : prevState.quizzes[currentIdx]
      };
    });
  };

  restart = () => {
    this.setState({
      isDefeated: false,
      isFinished: false,
      currentIdx: 0,
      answerType: ANSWER_TYPE.NOT_YET,
      answerHistory: [],
      ...player
    });
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  state = {
    answerType: ANSWER_TYPE.NOT_YET,
    selectAnswer: this.selectAnswer,
    currentIdx: 0,
    isAnswered: false,
    quizzes: [],
    message: "What does this word mean in Tagalog?",
    currentQuiz: {},
    isFinished: false,
    // isStarted: false,
    isStarted: true,

    answerHistory: [],
    restart: this.restart,
    start: this.start,
    ...player
  };

  componentDidMount() {
    // Supposed to fetch via api
    this.setState({ quizzes, currentQuiz: quizzes[0] });
  }

  renderMain = () => {
    if (!this.state.isStarted) {
      return <GameStart />;
    }

    if (this.state.quizzes.length === 0) {
      return (
        <React.Fragment>
          <div>...On Loading</div>
        </React.Fragment>
      );
    }

    return this.state.isDefeated || this.state.isFinished ? (
      <GameResult />
    ) : (
      <GameOngoing />
    );
  };

  render() {
    return (
      <React.Fragment>
        <header className="App-header" />
        <Main>
          <GameContext.Provider value={this.state}>
            {this.renderMain()}
          </GameContext.Provider>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
