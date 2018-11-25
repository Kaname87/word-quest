import React from "react";
import styles from "./Target.module.scss";
import target from "../image/target.png";

const Slime = ({ word }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.balloon}>{word}</div>
      <div className={styles.imageWrapper}>
        <img
          // style="-webkit-user-select: none;"
          src="http://stat.ameba.jp/user_images/20141028/00/ro-2004/53/64/p/o0120012013111434031.png"
        />
      </div>
    </div>
  );
};

export default Slime;
