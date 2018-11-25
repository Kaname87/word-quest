import React from "react";

import HeaderStatus from "./HeaderStatus";
import HeaderStatus2 from "./HeaderStatus2";
import Header from "./layout/Header";
import TargetScreen from "./TargetScreen";
import Command from "./Command";
import Message from "./Message";
import Footer from "./layout/Footer";

export default () => (
  <React.Fragment>
    <Header>
      <HeaderStatus2 />
    </Header>
    <TargetScreen />
    <Footer>
      <Command />
      <Message />
    </Footer>
  </React.Fragment>
);
