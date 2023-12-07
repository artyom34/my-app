import React from "react";
import classes from "./post.module.css";
import ava from "./images/ava.jpg";

const Post = () => {
  return (
    <div className={classes.post}>
      <img alt="ava" src={ava}></img> <span>Post 1</span>
      <div>Like</div>
    </div>
  );
};

export default Post;
