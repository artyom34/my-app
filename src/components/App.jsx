import React from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./app.module.css";
import Content from "./content/Content";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>
        <Header />
        <Navbar />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
