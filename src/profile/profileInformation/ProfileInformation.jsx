import React from "react";
import { useState } from "react";
import styles from './ProfileInformation.module.css'
import more from "../../assets/more.svg";

const ProfileInformation = ({ userInfo }) => {
    const [followBtnClicked, setFollowBtnClicked] = useState(false);

    const handleClickFollowBtn = () => {
        setFollowBtnClicked(!followBtnClicked);
      };

  return (
    <div className={styles.profileInformation}>
      <div className={styles.usernameInfo}>
        <h2 className={styles.username}>
          {userInfo.user.username.toLowerCase()}
        </h2>
        <button
          className={`${styles.buttonFollow} ${
            followBtnClicked ? styles.clicked : styles.disabled
          }`}
          onClick={() => handleClickFollowBtn()}
        >
          {followBtnClicked ? "Unfollow" : "Follow"}
        </button>
        {followBtnClicked && (
          <button className={styles.messageButton}>Message</button>
        )}
        <img src={more} alt="" />
      </div>
      <div className={styles.followersInformation}>
        <span>
          <strong>{userInfo.posts.length}</strong> posts
        </span>
        <span>
          <strong>{userInfo.user.followers.count} </strong>followers
        </span>
        <span>
          <strong>{userInfo.user.followers.following}</strong> following
        </span>
      </div>
      <div className={styles.nameOfUser}>{userInfo.user.name}</div>
    </div>
  );
};

export default ProfileInformation;
