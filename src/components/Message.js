import React, { useContext } from "react";
import styles from "./Message.module.scss";

import GameContext from "../contexts/GameContext";

const Message = ({ handleClick }) => {
  const { message } = useContext(GameContext);
  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
