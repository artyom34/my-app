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
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
