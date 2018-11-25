import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

import styles from "./HeaderStatus2.module.scss";

const HeaderStatus = () => {
  const { name, level, hp, mp } = useContext(GameContext);
  return (
    <div>
      <div className={styles.status}>
        <ul className={styles.statusContentUl}>
          <li className={styles.statusContentLi}>{name}</li>
          <li className={styles.statusContentLi}>H: {hp} </li>
          <li className={styles.statusContentLi}>M: {mp}</li>
          <li className={styles.statusContentLi}>Lv: {level}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderStatus;
