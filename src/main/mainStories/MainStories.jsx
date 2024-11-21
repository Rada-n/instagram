import React from "react";
import styles from "./MainStories.module.css";
import { useState, useRef } from "react";
import StoriesVideo from "../../storiesVideo/StoriesVideo";
import _ from "lodash";
import Avatar from "../../avatar/Avatar";
import Arrow from "../../assets/Arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const MainStories = ({ otherUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStoriesData, setModalStoriesData] = useState("");
  const [isEnd, setIsEnd] = useState(true);
  const [iseBeggining, setIsBeggining] = useState(true);

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.storiesWrapper}>
      {/* <button
        className={styles.switchToNextStories}
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }}
      >
          <img src={Arrow} alt="" />
        </button> */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        // navigation
        onSlideChange={(swiper) => {
          setIsBeggining(!swiper.isBeginning)
          setIsEnd(!swiper.isEnd)}}
        onReachEnd={() => setIsEnd(false)}
        onReachBeginning={() => setIsBeggining(false)}
        onFromEdge={() => {
          setIsBeggining(true)
          setIsEnd(true)
        }}
        onInit={() => setIsBeggining(false)}
        spaceBetween={10}
        slidesPerGroup={5}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        // className={styles.mySwiper}
        // ref={swiperRef}
      >
        {otherUsers.map((user) => (
          <SwiperSlide
            style={{ width: "74px", zIndex: 0 }}
            key={user.user.username}
          >
            <article
              className={styles.storiesCard}
              onClick={() =>
                handleClickShowModalStories(
                  user.user.stories,
                  user.user.username
                )
              }
            >
              <div className={styles.gradientCircle}>
                <div>
                  <img
                    src={user.user.stories.thumbnail}
                    className={styles.storiesPrewiew}
                  />
                </div>
              </div>
              <span className={styles.usernames}>
                {_.truncate(user.user.username.toLowerCase(), {
                  length: 10,
                  omission: "...",
                })}
              </span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
        <button ref={prevRef} className={`${styles.switchToPrevStories} ${!iseBeggining && styles.btnHidden}`}>
          <img src={Arrow} className={styles.arrowPrev} alt="" />
        </button>
        <button ref={nextRef} className={`${styles.switchToNextStories} ${!isEnd && styles.btnHidden}`}>
          <img src={Arrow} alt="" />
        </button>
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

export default MainStories;
