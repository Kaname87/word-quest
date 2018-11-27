import React, { useState } from "react";

import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ percentage }) => {
  //const [percentage, setPercentage] = useState(0);
  //   const percentage =;
  return (
    <div className={styles.progressBar}>
      <div className={styles.filler} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
