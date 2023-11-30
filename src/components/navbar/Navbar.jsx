import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </div>
  )
}
export default Navbar;