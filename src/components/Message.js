import React, { useContext } from "react";
import styled from "styled-components";

import GameContext from "../contexts/GameContext";

const Wrapper = styled.div`
  margin-left: 160px;
  padding: 20px;
  height: 160px;
  line-height: 22px;
  border-radius: 2px;
  border: #fff 3px solid;
  .commandUl {
    list-style: none;
  }
`;

const Message = () => {
  const { message } = useContext(GameContext);
  return (
    <Wrapper>
      <p>{message}</p>
    </Wrapper>
  );
};

export default Message;
