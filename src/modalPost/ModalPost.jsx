import styles from "./ModalPost.module.css";
import Vector5 from "../assets/Vector5.svg";
import Close from "../assets/Close.svg";
import more from "../assets/more.svg";
import Answer from "../assets/Answer.svg";
import Direct from "../assets/Direct.svg";
import Save from "../assets/Save.svg";
import { useState, useEffect } from "react";
import { SkeletonPostImage } from "../Skeleton";
import Like from "../Like";
import InputComment from "../main/inputComment/InputComment";
import CommentsPost from '../commentsPost/CommentsPost'

export const ModalPost = ({ modalPostData, onClose, avatar }) => {
  const [addComment, setAddComment] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(0);

  if (!modalPostData) {
    return <div>Loading...</div>;
  }

  const handleInputComment = (event) => {
    setAddComment(event.target.value);
  };

  const handleClickLike = () => {
    isLiked
      ? setIsLiked((prevLikes) => prevLikes - 1)
      : setIsLiked((prevLikes) => prevLikes + 1);
  };

  const imageLoad = () => {
    setIsImageLoading(true);
  };

  return (
    <div className={styles.modalPostWrapper} onClick={() => onClose()}>
      <img src={Close} className={styles.close} />
      <div
        className={styles.modalPostContainer}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.containerImage}>
          <img
            src={modalPostData.post.image.full}
            className={styles.image}
            onLoad={imageLoad}
          />
          {/* <div className={styles.skeletonImage}>
                                <SkeletonPostImage />
                            </div> */}
        </div>
        <div className={styles.postInformation}>
          <div className={styles.postInformationHeader}>
            <div className={styles.userInfo}>
              <img src={avatar} alt="" className={styles.avatar} />
              <strong className={styles.username}>
                {modalPostData.username.toLowerCase()}
              </strong>
            </div>
            <img src={more} alt="" />
          </div>
          <div className={styles.bodyContainer}>
            <strong className={styles.username}>
              {modalPostData.username.toLowerCase()}
            </strong>
            <span className={styles.postBody}>{modalPostData.post.body}</span>
          </div>
          <div className={styles.commentsWrapper}>
            {/* {modalPostData.post.comments.map((comment, index) => (
                            <div className={styles.commentContainer}>
                                <strong>{comment.email.toLowerCase()}</strong>
                                <span>{comment.body}</span>
                                <div>
                                    <span>Likes: </span>
                                    <span className={styles.answerToComment} onClick={() => handleClickAnswerToComment(index)}>Answer</span>
                            {answerComments[index] && (
                            <div>
                                <input
                                    type="text"
                                    placeholder='Add your comment...'
                                    className={styles.inputAnswer}
                                    onChange={()=> handleInputComment(event)}
                                />
                                <button className={`${styles.sendButton} ${addComment ? '' : styles.disabled}`}>Send</button>
                            </div>
                                    )}
                                </div>
                            </div>
                        ))} */}
            {modalPostData.post.comments.map((comment) => (
              <CommentsPost comment={comment} />
            ))}
          </div>
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
          <div className={styles.likesCount}>Likes: {isLiked}</div>
          <div className={styles.addAnswerContainer}>
            <InputComment />
          </div>
        </div>
      </div>
    </div>
  );
};
