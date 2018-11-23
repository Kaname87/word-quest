import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
// import styles from "./GameStart.module.css";

export default () => {
  const { start } = useContext(GameContext);
  return (
    <React.Fragment>
      <div>Filipino - English Exam</div>
      <button onClick={start}>Start?</button>
    </React.Fragment>
  );
};
