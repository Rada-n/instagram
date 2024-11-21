import React from "react";
import StoriesVideo from "../../storiesVideo/StoriesVideo";
import _ from "lodash";
import { useState } from "react";
import styles from './StroriesCard.module.css'
import Avatar from "../../avatar/Avatar";
import 'swiper/css';
import 'swiper/css/navigation';

const StoriesCard = ({ userInfo }) => {
    const [modalStoriesData, setModalStoriesData] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickShowModalStories = (stories, username) => {
        setModalStoriesData({ stories, username });
        setIsModalOpen(true);
        document.body.classList.add("no-scroll");
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setModalStoriesData("");
        document.body.classList.remove("no-scroll");
      };

  return (
    <div className={styles.storiesContainer}>
      <article
        className={styles.storiesCard}
        onClick={() =>
          handleClickShowModalStories(
            userInfo.user.stories,
            userInfo.user.username
          )
        }
      >
        <img
          src={userInfo.user.stories.thumbnail}
          className={styles.stroriesImage}
        />
        <span className={styles.title}>
          {_.truncate(userInfo.user.stories.title, {
            length: 20,
            omission: "...",
          })}
        </span>
      </article>
      {isModalOpen && modalStoriesData && (
        <StoriesVideo
          storiesData={modalStoriesData}
          onClose={closeModal}
          avatar={Avatar()}
        />
      )}
    </div>
  );
};

export default StoriesCard;
