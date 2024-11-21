import React from "react";
import { useState } from "react";
import _ from "lodash";
import styles from "./UserPost.module.css";
import InputComment from "../inputComment/InputComment";
import BodyPost from "./bodyPost/BodyPost";
import ReactionPost from "./reactionsPost/ReactionPost";
import PostHeader from "./postHeader/PostHeader";
import CommentsPost from '../../commentsPost/CommentsPost'

const UserPost = ({ user, randomPost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [viewComments, setViewComments] = useState(false);
  const [postLikes, setPostLikes] = useState(0);

  const handleClickLike = () => {
    setIsLiked(!isLiked);
    isLiked
      ? setPostLikes((prevLikes) => prevLikes - 1)
      : setPostLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <article className={styles.postContainer}>
      <PostHeader user={user} />
      <div className={styles.postInformationContainer}>
        <img
          src={randomPost.post.image.full}
          alt=""
          className={styles.postImage}
        />
        <div className={styles.allPostBodyWrapper}>
          <ReactionPost handleClickLike={handleClickLike} isLiked={isLiked} />
          <div className={styles.postBodyWrapper}>
            <span>Likes: {postLikes}</span>
            <BodyPost user={user} randomPost={randomPost} />
            <div
              className={styles.viewComments}
              onClick={() => setViewComments(!viewComments)}
            >
              {viewComments
                ? "Hide all comments"
                : `Show all ${randomPost.post.comments.length} comments`}
            </div>
            <div className={styles.allCommentsContainer}>
              {viewComments &&
                randomPost.post.comments.map((comment) => (
                  <CommentsPost comment={comment} />
                ))}
            </div>
            <InputComment />
          </div>
        </div>
      </div>
    </article>
  );
};

export default UserPost;
