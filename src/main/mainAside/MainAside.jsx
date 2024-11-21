import React from "react";
import Avatar from "../../avatar/Avatar";
import styles from './MainAside.module.css'
import { Link } from "react-router-dom";
import { MainFooter } from "../mainFooter/MainFooter";

const MainAside = ({ otherUsers, currentAccount}) => {
  return (
    <aside className={styles.asideContainer}>
      <Link to={`/users/${currentAccount[0].user.username}`} className={styles.link}>
          <div className={styles.yourAccountContainer}>
            <img src={Avatar()} className={styles.yourAvatar} />
            <div className={styles.yourInformationContainer}>
              <strong>{currentAccount[0].user.username.toLowerCase()}</strong>
              <span className={styles.yourName}>{currentAccount[0].user.name}</span>
            </div>
            <button className={styles.switch}>Switch</button>
          </div>
      </Link>
      <div className={styles.suggestionsInfo}>
        <span className={styles.suggestions}>Suggestions For You</span>
        <span className={styles.seeAll}>See All</span>
      </div>
      <div className={styles.suggestionsWrapper}>
        <div className={styles.suggestionsContainer}>
          {otherUsers
            .slice(0, Math.floor(Math.random() * otherUsers.length))
            .map((user) => (
              <div className={styles.followersContainer} key={user.user.id}>
                <img
                  src={Avatar()}
                  className={styles.followersAvatar}
                />
                <Link
                  to={`/users/${user.user.username}`}
                  className={styles.link}
                >
                  <div className={styles.yourInformationContainer}>
                    <span>{user.user.username.toLowerCase()}</span>
                    <span className={styles.yourName}>{user.user.name}</span>
                  </div>
                </Link>
                <button className={styles.switch}>Follow</button>
              </div>
            ))}
        </div>
      </div>
        <MainFooter />
    </aside>
  );
};

export default MainAside;
