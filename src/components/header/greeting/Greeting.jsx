import React from "react";
import classes from "./greeting.module.css";

const Greeting = () => {
  return (
    <div className={classes.greeting}>
      <h1 className={classes.greeting}>Welcome to the social network!</h1>
    </div>
  );
};

export default Greeting;
