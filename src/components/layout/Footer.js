import React from "react";

import styles from "./Footer.module.css";

export default ({ children }) => (
  <div className={styles.footer}>{children}</div>
);
