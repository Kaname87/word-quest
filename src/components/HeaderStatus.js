import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

import styles from "./HeaderStatus.module.css";

const HeaderStatus = () => {
  const { name, level, hp, mp } = useContext(GameContext);
  return (
    <div>
      <div className={styles.status}>
        <ul className={styles.statusTitleUl}>
          <li className={styles.statusTitleLi}>Name</li>
          <li className={styles.statusTitleLi}>LV</li>
          <li className={styles.statusTitleLi}>HP</li>
          <li className={styles.statusTitleLi}>MP</li>
        </ul>
        <ul className={styles.statusContentUl}>
          <li className={styles.statusContentLi}>{name}</li>
          <li className={styles.statusContentLi}>{level}</li>
          <li className={styles.statusContentLi}>{hp}</li>
          <li className={styles.statusContentLi}>{mp}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderStatus;
