import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
import styles from "./Tagalog.module.css";
import baybayin from "../image/baybayin.jpeg";
export default () => {
  const { start } = useContext(GameContext);
  return (
    <React.Fragment>
      <div>Filipino - English Quest</div>
      <button onClick={start}>Start?</button>
    </React.Fragment>
  );
};
