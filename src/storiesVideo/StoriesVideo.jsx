import styles from './StoriesVideo.module.css'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoriesVideo = ({ storiesData, onClose, avatar }) => {
    const [valueInputComment, setValueInputComment] = useState('');
    const [reactions, setReactions] = useState({
        '👍' : 0,
        '❤️' : 0,
        '😊' : 0,
    });

    const handleClickReaction = (emoji) => {
        setReactions(prevReactions => ({ ...prevReactions, [emoji] : prevReactions[emoji] + 1}))
        toast.success(emoji, {
            className: 'toast',
        })
    }

    const videoRef = useRef('');

    const handleFocus = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseOver = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };


    if (!storiesData) {
        return <div>Loading...</div>
    }

    const handleInputComment = (event) => {
        setValueInputComment(event.target.value)
    }

  return (
    <div className={styles.modalWrapper} onClick={() => onClose()}>
      <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
        <div className={styles.gradientTop}></div>
        <div className={styles.userInfoContainer}>
            <img src={avatar} className={styles.avatar}/>
            <span className={styles.username}>{storiesData.username.toLowerCase()}</span>
        </div>
        <div className={styles.commentContainer}>
            <input 
                type="text"
                value={valueInputComment}
                className={styles.inputComment} 
                placeholder='Add your comment...'
                onChange={() => handleInputComment(event)}
            />
            {valueInputComment && (<button className={styles.sendButton}>Send</button>)}
        </div>
        <div className={styles.gradientBottom}></div>
        <div className={styles.reactionsContainer}>
          <button className={styles.reactionButton} onClick={() => handleClickReaction('👍')}>
            👍
          </button>
          <button className={styles.reactionButton} onClick={() => handleClickReaction('❤️')}>
            ❤️
          </button>
          <button className={styles.reactionsButton} onClick={() => handleClickReaction('😊')}>
            😊
          </button>
        </div>
        <video 
            ref={videoRef} 
            src={storiesData.stories.urls.mp4} 
            autoPlay 
            loop 
            className={styles.video} 
            onFocus={handleFocus}  
            onMouseOver={handleMouseOver}
        />
        <div className={styles.toastContainer}>
            <ToastContainer className={styles.toast}
            position='bottom-center'
              autoClose={1000}
              hideProgressBar={true} />
        </div>
      </div>
    </div>
  )
}

export default StoriesVideo
