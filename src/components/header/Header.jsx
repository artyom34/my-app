import React from "react";
import classes from "./header.module.css";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
};
export default Header;
