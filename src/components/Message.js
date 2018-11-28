import React, { useContext, useState, useEffect } from "react";
import styles from "./Message.module.scss";

import GameContext from "../contexts/GameContext";

const Message = () => {
  const { messageList } = useContext(GameContext);
  const [currentMessageIdx, updateCurrentMessageIdx] = useState(0);

  useEffect(
    () => {
      updateCurrentMessageIdx(0);
    },
    [messageList]
  );

  const handleOnClickMessage = () => {
    if (messageList.length > currentMessageIdx + 1) {
      updateCurrentMessageIdx(currentMessageIdx + 1);
    }
  };

  return (
    <div className={styles.wrapper} onClick={handleOnClickMessage}>
      <p>{messageList[currentMessageIdx]}</p>
    </div>
  );
};

export default Message;
