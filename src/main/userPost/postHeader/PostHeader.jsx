import React from "react";
import styles from "./PostHeader.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../../avatar/Avatar";
import more from '../../../assets/more.svg'

const PostHeader = ({ user }) => {
  return (
    <div className={styles.postHeaderContainer}>
      <Link to={`/users/${user.user.username}`} className={styles.link}>
        <div className={styles.headerUserInfoContainer}>
          <img src={Avatar()} className={styles.avatar} />
          <strong className={styles.username}>
            {user.user.username.toLowerCase()}
          </strong>
        </div>
      </Link>
      <img src={more} alt="more" className={styles.more} />
    </div>
  );
};

export default PostHeader;
