import React from "react";
import classes from "./users.module.css";

const Users = () => {
  return (
    <div className={classes.usersNames}>
      <div className={classes.usersItem}>
        <a href="#" className={classes.UsersItemLink}>
          Artyom
        </a>
      </div>
      <div className={classes.usersItem}>
        <a href="#" className={classes.UsersItemLink}>
          Alex
        </a>
      </div>
      <div className={classes.usersItem}>
        <a href="#" className={classes.UsersItemLink}>
          Dima
        </a>
      </div>
      <div className={classes.usersItem}>
        <a href="#" className={classes.UsersItemLink}>
          Kostya
        </a>
      </div>
      <div className={classes.usersItem}>
        <a href="#" className={classes.UsersItemLink}>
          Denis
        </a>
      </div>
    </div>
  );
};

export default Users;
