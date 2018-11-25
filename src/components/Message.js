import React, { useContext } from "react";
import styles from "./Message.module.scss";

import GameContext from "../contexts/GameContext";

const Message = () => {
  const { message } = useContext(GameContext);
  return (
    <div className={styles.wrapper}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
