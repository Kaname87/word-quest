import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

// import HeaderStatus from "./HeaderStatus";
import HeaderStatus2 from "./HeaderStatus2";
import Header from "./layout/Header";
import TargetScreenWrapper from "./TargetScreenWrapper";
// import Command from "./Command";
import Message from "./Message";
import Footer from "./layout/Footer";
import Experience from "./Experience";

import styles from "./GameResult.module.css";

const GameResult = () => {
  const { answerHistory, restart, isDefeated, updateCharacter } = useContext(
    GameContext
  );
  const correctAnswers = answerHistory.filter(answer => {
    if (answer.isCorrect) {
      return answer;
    }
    return null;
  });

  return (
    <React.Fragment>
      <Header>
        <HeaderStatus2 />
      </Header>
      <TargetScreenWrapper>
        <h2 className={styles.result}>WORD EXPERIENCE</h2>
        <Experience />
      </TargetScreenWrapper>
      <Footer>
        <Message
          handleClick={() => {
            console.log(1);
            const earnedExp = isDefeated ? 0 : 2;
            updateCharacter(earnedExp);
          }}
        />
      </Footer>
    </React.Fragment>
  );

  // return (
  //   <React.Fragment>
  //     <div>{isDefeated ? "You lose..." : "You Win !"}</div>

  //     <div>
  //       Total: {correctAnswers.length} / {answerHistory.length}
  //     </div>

  //     <table className={styles.wrapper}>
  //       <thead className={styles.border}>
  //         <tr>
  //           <th>Question</th>
  //           <th>Your Answer</th>
  //           <th>Result</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {answerHistory.map(answer => (
  //           <tr key={answer.targetWord} className={styles.border}>
  //             <th className={styles.border}>{answer.targetWord}</th>
  //             <td className={styles.border}>{answer.option}</td>
  //             {answer.isCorrect ? (
  //               <td className={styles.correct}>√</td>
  //             ) : (
  //               <td className={styles.wrong}>X</td>
  //             )}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>

  //     {!isDefeated && <div>You're experence increased by 2 </div>}
  //     <button onClick={restart}>Restart?</button>
  //   </React.Fragment>
  // );
};

export default GameResult;
