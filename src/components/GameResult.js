import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../contexts/GameContext";

const Table = styled.table`
  /* border: 1px solid white; */
  margin-left: 160px;
  padding: 20px;
  height: 300px;
  line-height: 22px;
  border-radius: 2px;
  border: #fff 3px solid;
  thead {
    font-size: 25px;
  }
  th,
  tr,
  td {
    border: 1px solid white;
  }
  .correct {
    color: green;
  }
  .wrong {
    color: red;
  }
`;

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

      <Table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {answerHistory.map(answer => (
            <tr key={answer.targetWord}>
              <th>{answer.targetWord}</th>
              <td>{answer.option}</td>
              {answer.isCorrect ? (
                <td className="correct">√</td>
              ) : (
                <td className="wrong">X</td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {!isDefeated && <div>You're experence increased by 2 </div>}
      <button onClick={restart}>Restart?</button>
    </React.Fragment>
  );
};

export default GameResult;
