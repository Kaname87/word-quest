import React, { useState } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  font-weight: bold;
  margin-bottom: 20px;
`;

const CommandItem = ({ text, handleOnClick }) => {
  const [selected, setSelected] = useState(false);

  const handleMouseEnter = () => setSelected(true);
  const handleMouseLeave = () => setSelected(false);

  return (
    <ListItem
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selected ? ">" : null}
      {text}
    </ListItem>
  );
};
export default CommandItem;
