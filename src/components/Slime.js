import React from "react";
import styles from "./Slime.module.css";

const Slime = ({ word }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slime_body}>
        <div className={styles.slime_top} />
        <div className={styles.slime_middle_left} />
        <div className={styles.slime_middle_right} />
        <div className={styles.slime_buttom} />

        {/* <div className={styles.slime_black_eye} /> */}
        {/* <div className={styles.slime_eye slime_eye_left} />
        <div className={styles.slime_eye slime_eye_right} /> */}
        <div className={styles.slime_mouse_text}>{word}</div>
        {/* <div className={styles.slime_mouse" /> */}
      </div>
    </div>
  );
};

export default Slime;
