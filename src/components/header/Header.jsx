import React from "react";
import Greeting from "./greeting/Greeting";
import classes from "./header.module.css";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Greeting />  
    </div>
  );
};
export default Header;
