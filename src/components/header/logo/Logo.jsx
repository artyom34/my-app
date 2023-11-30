import React from "react";
import classes from "./logo.module.css";
import logo from "./images/logo.jpg";

const Logo = () =>{
  return (
    <div>
      <img className={classes.logo} src={logo} alt="logo"/>
    </div>
  )
}
export default Logo;