import React from "react";
import classes from "./content.module.css";
import Profile from "./profile/Profile";

const Content = () => {
  return (
    <div className={classes.content}>
      <Profile />
    </div>
  );
};
export default Content;
