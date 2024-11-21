import React from 'react'
import styles from './BodyPost.module.css'
import _ from 'lodash'
import { useState } from 'react'

const BodyPost = ({ user, randomPost }) => {
    const [showFullBody, setShowFullBody] = useState(false);
    
  return (
    <div className={styles.postBodyContainer}>
              <strong className={styles.postBodyUsername}>
                {user.user.username.toLowerCase()}
              </strong>
              <p className={styles.postBody}>
                {showFullBody ? (
                  randomPost.post.body
                ) : (
                  <>
                    {_.truncate(randomPost.post.body, {
                      length: 50,
                    })}
                    <button
                      className={styles.more}
                      onClick={() => {
                        setShowFullBody(true);
                      }}
                    >
                      more
                    </button>
                  </>
                )}
              </p>
            </div>
  )
}

export default BodyPost
