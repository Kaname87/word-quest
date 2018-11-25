import React, { useContext } from "react";

import CommandItem from "./CommandItem";
import GameContext from "../contexts/GameContext";

import styles from "./Command.module.scss";

const Command = () => {
  const { selectAnswer, currentQuiz } = useContext(GameContext);
  const commandList = currentQuiz.answerOptions.map(answerOption => (
    <CommandItem
      key={answerOption.option}
      text={answerOption.option}
      handleOnClick={() => selectAnswer(currentQuiz.targetWord, answerOption)}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <ul className={styles.commandUl}>{commandList}</ul>
    </div>
  );
};

export default Command;
