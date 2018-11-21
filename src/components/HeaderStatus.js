import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../contexts/GameContext";

const Wrapper = styled.div`
  .statusUl {
    list-style: none;
    text-align: center;
  }
  .statusLi {
    background: black;
    display: inline-block;
    width: 4em;
    margin-right: 15px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 0;
  }
  .status {
    border-radius: 2px;
    border: #fff 3px solid;
  }
  .statusTitle {
    margin: -10px 20px 10px 20px;
    padding-right: 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .statusTitle > .statusLi {
    background: black;
  }
  .statusContent > .statusLi {
    margin-right: 16px;
  }
`;

const HeaderStatus = () => {
  const { name, level, hp, mp } = useContext(GameContext);
  return (
    <Wrapper>
      <div className="status">
        <ul className="statusUl statusTitle">
          <li className="statusLi">Name</li>
          <li className="statusLi">LV</li>
          <li className="statusLi">HP</li>
          <li className="statusLi">MP</li>
        </ul>
        <ul className="statusUl statusContent">
          <li className="statusLi">{name}</li>
          <li className="statusLi">{level}</li>
          <li className="statusLi">{hp}</li>
          <li className="statusLi">{mp}</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default HeaderStatus;
