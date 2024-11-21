import React from "react";
import { useState } from "react";
import styles from './ProfileTabs.module.css';
import Posts from "../../assets/Posts.svg";
import Guides from "../../assets/Guides.svg";
import Reels from "../../assets/Reels.svg";
import Videos from "../../assets/Videos.svg";
import Tagged from "../../assets/Tagged.svg";
import { ModalPost } from "../../modalPost/ModalPost";
import Avatar from "../../avatar/Avatar";

const ProfileTabs = ({ userInfo }) => {
    const [activeTab, setActiveTab] = useState("posts");
    const [modalPostData, setModalPostData] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickShowModalPost = (post, username) => {
        setModalPostData({ post, username });
        setIsModalOpen(true);
        document.body.classList.add("no-scroll");
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setModalPostData("");
        document.body.classList.remove("no-scroll");
      };

    const renderContent = (user) => {
        switch (activeTab) {
          case "posts":
            return userInfo.posts.map((post) => (
              <img
                key={post.post.id}
                src={post.post.image.small}
                className={styles.images}
                onClick={() =>
                  handleClickShowModalPost(post.post, user.user.username)
                }
                alt="Post"
              />
            ));
          case "guides":
            return <div className={styles.emptyContentTab}>Guides content for {user.user.username}</div>;
          case "reels":
            return <div className={styles.emptyContentTab}>Reels content for {user.user.username}</div>;
          case "videos":
            return <div className={styles.emptyContentTab}>Videos content for {user.user.username}</div>;
          case "tagged":
            return <div className={styles.emptyContentTab}>Tagged content for {user.user.username}</div>;
          default:
            return null;
        }
      };

  return (
    <section className={styles.tabsWrapper}>
      <div className={styles.tabsContainer}>
        {["posts", "guides", "reels", "videos", "tagged"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab ? styles.activeTab : styles.disabledTab
            }
          >
            <img
              src={
                {
                  posts: Posts,
                  guides: Guides,
                  reels: Reels,
                  videos: Videos,
                  tagged: Tagged,
                }[tab]
              }
              alt={tab}
            />
            <span>{tab.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div className={styles.imagesContainer}>
        {renderContent(userInfo)}
      </div>
      {isModalOpen && modalPostData && (
            <ModalPost
              modalPostData={modalPostData}
              onClose={closeModal}
              avatar={Avatar()}
            />
          )}
    </section>
  );
};

export default ProfileTabs;
