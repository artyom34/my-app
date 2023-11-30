import React from "react";
import classes from "./app.module.css";
import Content from "./content/Content";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div className={classes.app_wrapper}>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
