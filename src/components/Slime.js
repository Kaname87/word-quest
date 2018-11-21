import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #2c6ebd;
  position: absolute;
  left: 350px;

  /* bottom: 20px; */
  .slime_body {
    border: none;
    height: 73px;
    width: 80px;
    top: 32px;
    left: 140px;
  }
  .slime {
    background-color: #2c6ebd;
    border: 3px solid transparent;
    position: absolute;
  }
  .slime_top {
    border-radius: 7em 7em 0 0;
    height: 10px;
    width: 6px;
    top: -10px;
    /* left: 31px; */
    left: 64px;
  }
  .slime_middle {
    background-color: black;
    border: 7px solid transparent;
    top: 0;
    height: 10px;
    width: 51px;
  }
  .slime_middle_left {
    border-radius: 0 0 2em 0;
    left: 0px;
  }
  .slime_middle_right {
    border-radius: 0 0 0 2em;
    /* left: 43px; */
    left: 76px;
  }
  .slime_buttom {
    border-radius: 2em;
    border-width: 6px;
    top: 17px;
    left: -15px;
    /* height: 55px; */
    height: 105px;
    /* width: 91px; */
    width: 161px;
  }
  .slime_eye {
    border: 5px solid #fff;
    background-color: black;
    top: 43px;
    height: 7px;
    width: 7px;
  }

  .slime_eye_text {
    top: 33px;
    /* left: 11px; */
    height: 7px;
    width: 7px;
  }
  .slime_eye_left {
    /* left: 19px; */
    left: 47px;
  }
  .slime_eye_right {
    /* left: 42px; */
    left: 74px;
  }
  /* .slime_mouse {
    border-radius: 2em;
    border-color: #000;
    background-color: #f00;
    top: 63px;
    left: 13px;
    height: 7px;
    width: 46px;
  } */

  .slime_mouse_text {
    /* border-radius: 2em; */
    /* border-color: #000; */
    font-size: 30px;
    /* background-color: #f00; */
    color: white;
    /* background-color: red; */
    top: 48px;
    /* left: 25px; */
    /* height: 50px;
    width: 130px; */
    /* top: 68px;
    left: 3px;
    height: 50px;
    width: 130px; */
  }
`;

const Slime = ({ word }) => {
  return (
    <Wrapper>
      <div className="slime_body">
        <div className="slime slime_top" />
        <div className="slime slime_middle slime_middle_left" />
        <div className="slime slime_middle slime_middle_right" />
        <div className="slime slime_buttom" />

        {/* <div className="slime slime_black_eye" /> */}
        {/* <div className="slime slime_eye slime_eye_left" />
        <div className="slime slime_eye slime_eye_right" /> */}
        <div className="slime slime_mouse_text">{word}</div>
        {/* <div className="slime slime_mouse" /> */}
      </div>
    </Wrapper>
  );
};

export default Slime;
