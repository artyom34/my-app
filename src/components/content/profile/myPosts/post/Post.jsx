import React from "react";
import classes from "./post.module.css";
import ava from "./images/ava.jpg";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img alt="ava" src={ava}></img> <span>{props.message}</span>
      <div>
        <spanLike>Likes</spanLike> {props.likesCounter}
      </div>
    </div>
  );
};

export default Post;
