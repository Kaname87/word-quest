import React from "react";

import styles from "./Header.module.css";

export default ({ children }) => (
  <div className={styles.header}>{children}</div>
);
