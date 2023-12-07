import React from "react";
import classes from "./profile.module.css";
import banner from "./images/banner.jpg"
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src={banner} alt="banner"></img>
      </div>
      <div>ava + descriptions</div>
      <MyPosts />
    </div>
  )
};

export default Profile;