import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContentContainer}>
                <ul className={styles.listInfo}>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Top Accounts</li>
                    <li>HashTags</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                </ul>
                <div className={styles.selectContainer}>
                    <select className={styles.selectLanguage}>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="russian">Russian</option>
                    </select>
                    <span className={styles.copyrightInfo}>© 2021 Instagram from Meta</span>
                </div>
            </div>
        </footer>
    )
}