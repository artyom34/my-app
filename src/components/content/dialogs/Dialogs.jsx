import React from "react";
import classes from "./dialogs.module.css";
import Messages from "./Messages/messages";
import Users from "./Users/Users";

const Dialogs = () => {
  return (
    <div className= {classes.dialogs}>
      <Users />
      <Messages />
    </div>
  );
};

export default Dialogs;
