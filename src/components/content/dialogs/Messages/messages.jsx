import React from "react";
import classes from "./messages.module.css";

const Messages = () => {
  return (
    <div className="messages">
      <div className={classes.messagesItem}>Hi, how are you?</div>
      <div className={classes.messagesItem}>I'm fine</div>
      <div className={classes.messagesItem}>Go</div>
      <div className={classes.messagesItem}>Welcome</div>
      <div className={classes.messagesItem}>Have a nice day!</div>
    </div>
  )
}

export default Messages;