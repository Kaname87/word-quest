import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import { ANSWER_TYPE } from "../constants/constants";

import Target from "./Target";
import styles from "./TargetScreen.module.scss";

const TargetScreen = () => {
  const { answerType, currentQuiz } = useContext(GameContext);

  let answerClass = "";
  let wrapperClass = "wrapper";
  switch (answerType) {
    case ANSWER_TYPE.CORRECT:
      answerClass = "correct";
      break;
    case ANSWER_TYPE.WRONG:
      answerClass = "wrong";
      wrapperClass = "wrongWrapper";
      break;
    default:
      break;
  }

  return (
    <div className={styles[wrapperClass]}>
      <div className={styles.targetContainer}>
        <div className={styles[answerClass]}>
          {/* <Slime word={currentQuiz.targetWord} /> */}
          <Target word={currentQuiz.targetWord} />
        </div>
      </div>
    </div>
  );
};

export default TargetScreen;
