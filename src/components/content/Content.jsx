import React from "react";
import classes from "./content.module.css";
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";

const Content = () => {
  return (
    <div className={classes.content}>
      <Profile />
      <Dialogs />
    </div>
  );
};
export default Content;
