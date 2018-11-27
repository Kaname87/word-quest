import React, { useContext, useState } from "react";

import GameContext from "../contexts/GameContext";
import styles from "./Experience.module.scss";
import ProgressBar from "./ProgressBar";

const Experience = () => {
  // const [percentagfe]
  const { answerHistory, restart, isDefeated } = useContext(GameContext);
  const correctAnswers = answerHistory.filter(answer => {
    if (answer.isCorrect) {
      return answer;
    }
    return null;
  });

  const exps = [
    {
      word: "bayabas",
      meaning: "guava",
      correct: 3,
      isCorrect: true,
      next: 10
    },
    {
      word: "masarao",
      meaning: "delicious",
      correct: 9,
      isCorrect: true,
      next: 10
    },
    {
      word: "dagat",
      meaning: "sea",
      correct: 1,
      isCorrect: false,
      next: 10
    },
    {
      word: "kaliwa",
      meaning: "left",
      correct: 10,
      isCorrect: false,
      next: 10
    }
  ];

  const expResult = exps.map(exp => {
    const percentage = (exp.correct / exp.next) * 100;
    return (
      <div className={styles.row} key={exp.word}>
        <div className={styles.columnWord}>
          <p className={styles.word}>{exp.word}</p>
          <p className={styles.meaning}>{exp.meaning}</p>
        </div>
        <div className={styles.columnResult}>
          <ProgressBar percentage={percentage} />
          <span className={styles.current}>Curernt: {exp.correct}</span>
          <span className={styles.next}>Next:{exp.next}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div>{expResult}</div>
    </div>
  );
};

export default Experience;
