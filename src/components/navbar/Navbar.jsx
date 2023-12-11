import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
