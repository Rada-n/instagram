import { useEffect, useState } from "react";
import { GetUsersInfo } from "../GetUsersInfo";
import styles from "./Profile.module.css";
import _ from "lodash";
import { useParams } from "react-router-dom";
import ProfileTabs from './profileTabs/ProfileTabs'
import StoriesCard from "./storiesCard/StoriesCard";
import Avatar from "../avatar/Avatar";
import ProfileInformation from "./profileInformation/ProfileInformation";

export function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("true");
  const currentUsername = useParams();


  useEffect(() => {
    const fetchPosts = async () => {
      const dataUsers = await GetUsersInfo();
      try {
        setUserInfo(dataUsers.find(user => user.user.username.toLowerCase() === currentUsername.user.toLowerCase()))
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className={styles.statesContainer}>
        <span className={styles.states}>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statesContainer}>
        <span className={styles.states}>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <div>
        <article key={userInfo.user.id} className={styles.profileContainer}>
          <div className={styles.profileInfoContainer}>
            <div className={styles.avatarContainer}>
              <img src={Avatar()} className={styles.avatar} />
            </div>
            <ProfileInformation userInfo={userInfo}/>
          </div>
            <StoriesCard userInfo={userInfo} />
            <ProfileTabs userInfo={userInfo}/>
        </article>
    </div>
  );
}
