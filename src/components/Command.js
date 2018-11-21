import React, { useContext } from "react";
import styled from "styled-components";

import CommandItem from "./CommandItem";
import GameContext from "../contexts/GameContext";

const Wrapper = styled.div`
  float: left;
  /* width: 130px; */
  width: 130px;
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  border: #fff 3px solid;
  .commandUl {
    list-style: none;
  }
`;
const NewCommand = () => {
  const { selectAnswer, currentQuiz } = useContext(GameContext);
  const commandList = currentQuiz.answerOptions.map(answerOption => (
    <CommandItem
      key={answerOption.option}
      text={answerOption.option}
      handleOnClick={() => selectAnswer(currentQuiz.targetWord, answerOption)}
    />
  ));
  return (
    <Wrapper>
      <ul className="commandUl">{commandList}</ul>
    </Wrapper>
  );
};

export default NewCommand;
