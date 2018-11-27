import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
import styles from "./GameStart.module.scss";
import Experience from "./Experience";
export default () => {
  const { start } = useContext(GameContext);
  return (
    // <Experience />
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>Filipino - English Quest</div>
        <button onClick={start}>Start?</button>
      </div>
    </div>
  );
};
