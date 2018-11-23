import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";
import styles from "./GameResult.module.css";

const GameResult = () => {
  const { answerHistory, restart, isDefeated } = useContext(GameContext);
  const correctAnswers = answerHistory.filter(answer => {
    if (answer.isCorrect) {
      return answer;
    }
  });

  return (
    <React.Fragment>
      <div>{isDefeated ? "You lose..." : "You Win !"}</div>

      <div>
        Total: {correctAnswers.length} / {answerHistory.length}
      </div>

      <table className={styles.wrapper}>
        <thead className={styles.border}>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {answerHistory.map(answer => (
            <tr key={answer.targetWord} className={styles.border}>
              <th className={styles.border}>{answer.targetWord}</th>
              <td className={styles.border}>{answer.option}</td>
              {answer.isCorrect ? (
                <td className={styles.correct}>√</td>
              ) : (
                <td className={styles.wrong}>X</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {!isDefeated && <div>You're experence increased by 2 </div>}
      <button onClick={restart}>Restart?</button>
    </React.Fragment>
  );
};

export default GameResult;
