import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import { ANSWER_TYPE } from "../constants/constants";

import Target from "./Target";
import styles from "./TargetScreen.module.scss";

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
    <div className={styles.wrapper}>
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
