import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import GameContext from "../contexts/GameContext";
import { ANSWER_TYPE } from "../constants/constants";
import Slime from "./Slime";

const correct = keyframes`
    20% {
      -webkit-transform: translate(25px);
    }
    40% {
      -webkit-transform: translate(-25px);
    }
    60% {
      -webkit-transform: translate(10px);
    }
    80% {
      -webkit-transform: translate(-10px);
    }
    100% {
      letter-spacing: 1em;
      opacity: 0;
    }
`;

const wrong = keyframes`
    50% {
        -webkit-transform: scale(1.5) rotate(-15deg)
    }
`;

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  .targetContainer {
    list-style: none;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
  }
  /* .target {
    text-align: center;
    font-size: 100px;
    font-weight: bold;
  } */

  .target {
    text-align: center;
    /* font-size: 100px; */
    font-weight: bold;
  }
  .correct {
    animation-name: ${correct};
    animation-iteration-count: 1;
    animation-duration: 1s;
  }

  .wrong {
    animation-name: ${wrong};
    animation-iteration-count: 1;
    animation-duration: 1s;
  }
`;

const TargetScreen = () => {
  const { answerType, currentQuiz } = useContext(GameContext);

  let answerClass = "";
  switch (answerType) {
    case ANSWER_TYPE.CORRECT:
      answerClass = "correct";
      break;
    case ANSWER_TYPE.WRONG:
      answerClass = "wrong";
      break;
    default:
      break;
  }

  return (
    <Wrapper>
      <div className="targetContainer">
        {/* <div className={"target answerClass"}>{currentQuiz.targetWord}</div> */}
        <div className={"target " + answerClass}>
          <Slime word={currentQuiz.targetWord} />
        </div>
      </div>
    </Wrapper>
  );
};

export default TargetScreen;
