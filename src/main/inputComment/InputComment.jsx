import React from "react";
import styles from "./InputComment.module.css";
import { useState } from "react";
import Emoji from '../../assets/Emoji.svg'

const InputComment = () => {
    const [comment, setComment] = useState("");
  return (
    <div className={styles.commentsContainer}>
      <img src={Emoji} alt="" />
      <input
        type="text"
        placeholder="Add a comment..."
        className={styles.inputComment}
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
       <button className={`${styles.sendButton} ${comment ? '' : styles.disabled}`}>Send</button>
    </div>
  );
};

export default InputComment;
