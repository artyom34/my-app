import React from "react";
import classes from "./myPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hello brother!" likesCounter= "15"/>
        <Post message="How are you?" likesCounter= "24"/>
      </div>
    </div>
  );
};

export default MyPosts;
