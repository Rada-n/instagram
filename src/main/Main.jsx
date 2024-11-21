import styles from "./Main.module.css";
import { useState, useEffect, useContext } from "react";
import { GetUsersInfo } from "../GetUsersInfo";
import { UserContext } from "../Authorization/Authorization";
import _ from "lodash"
import UserPost from "./userPost/UserPost";
import MainAside from "./mainAside/MainAside";
import MainStories from "./mainStories/MainStories";
import { useMediaQuery } from "react-responsive";
import { Footer } from "../footer/Footer";

const Main = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("true");
  const { userEmail } = useContext(UserContext);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 970px'})

  useEffect(() => {
    const fetchPosts = async () => {
      const dataUsers = await GetUsersInfo();
      try {
        setUsersInfo([...dataUsers]);
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

  const otherUsers = usersInfo.filter((user) => user.user.email !== userEmail);
  const currentAccount = usersInfo.filter((user) => user.user.email === userEmail);

  return (
    <>
    <div className={styles.mainContainer}>
      <MainAside otherUsers={otherUsers} currentAccount={currentAccount}/>
      <div className={styles.centralContainer}>
        <MainStories otherUsers={otherUsers}/>
        <div className={styles.feedContainer}>
          {otherUsers.map((user) => {
            const posts = user.posts;
            const randomIndex = Math.floor(Math.random() * posts.length);
            const randomPost = posts[randomIndex];
            return (
              <UserPost user={user} randomPost={randomPost} key={user.user.id}/>
            );
          })}
        </div>
      </div>
    </div>
    {isSmallScreen && ( <Footer />) }
    </>
  );
};

export default Main;
