import React from "react";

import styles from "./Main.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.main}>{children}</div>
  </div>
);
