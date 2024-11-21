import React from "react";
import styles from './ReactionPost.module.css'
import Like from "../../../Like";
import Answer from '../../../assets/Answer.svg'
import Direct from "../../../assets/Direct.svg";
import Save from "../../../assets/Save.svg";

const ReactionPost = ({ handleClickLike, isLiked }) => {
  return (
    <div className={styles.reactionsContainer}>
      <div className={styles.reactionsIcons}>
        <button onClick={() => handleClickLike()}>
          <Like className={isLiked ? styles.isLiked : styles.notLike} />
        </button>
        <button>
          <img src={Answer} />
        </button>
        <button>
          <img src={Direct} />
        </button>
      </div>
      <img src={Save} className={styles.saveIcon} />
    </div>
  );
};

export default ReactionPost;
