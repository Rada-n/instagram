import styles from './MainFooter.module.css'

export const MainFooter = () => {
    return (
        <footer className={styles.footerContainer}>
        <div className={styles.footerContentContainer}>
          <ul className={styles.listInfo}>
            <li>About</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Top Accounts</li>
            <li>HashTags</li>
            <li className={styles.selectContainer}>
              <select className={styles.selectLanguage}>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="russian">Russian</option>
              </select>
            </li>
          </ul>
        </div>
      </footer>
    )
}