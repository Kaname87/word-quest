import React from "react";
import styles from "./TargetScreen.module.scss";

const TargetScreenWrapper = ({ onClick, children }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {children}
    </div>
  );
};

export default TargetScreenWrapper;
