import React, { useState } from "react";

import styles from "./CommandItem.module.css";

const CommandItem = ({ text, handleOnClick }) => {
  const [selected, setSelected] = useState(false);

  const handleMouseEnter = () => setSelected(true);
  const handleMouseLeave = () => setSelected(false);

  return (
    <li
      className={styles.listItem}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selected ? ">" : null}
      {text}
    </li>
  );
};
export default CommandItem;
