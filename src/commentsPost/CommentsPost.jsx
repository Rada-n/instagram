import React from "react";
import { useState } from "react";
import InputComment from "../main/inputComment/InputComment";
import styles from "./CommentsPost.module.css";
import Avatar from "../avatar/Avatar";

const CommentsModalPost = ({ comment }) => {
  const [answerComments, setAnswerComments] = useState(false);

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentUserInfo}>
        <img src={Avatar()} alt="" className={styles.avatar} />
        <strong>{comment.email.toLowerCase()}</strong>
      </div>
      <span>{comment.body}</span>
      <div>
        <button>Likes: </button>
        <button
          className={styles.answerToComment}
          onClick={() => setAnswerComments(!answerComments)}
        >
          Answer
        </button>
        {answerComments && <InputComment />}
      </div>
    </div>
  );
};

export default CommentsModalPost;
