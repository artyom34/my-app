import React from "react";
import classes from "./content.module.css";
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings"; 

const Content = () => {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};
export default Content;
