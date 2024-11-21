import styles from "./Authorization.module.css";
import Logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(JSON.parse(localStorage.getItem('currentUser')) || '');

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const Authorization = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { setUserEmail } = useContext(UserContext);

  const usersEmails = [
    "Sincere@april.biz",
    "Shanna@melissa.tv",
    "Nathan@yesenia.net",
    "Julianne.OConner@kory.org",
    "Lucio_Hettinger@annie.ca",
    "Karley_Dach@jasper.info",
    "Telly.Hoeger@billy.biz",
    "Sherwood@rosamond.me",
    "Chaim_McDermott@dana.io",
    "Rey.Padberg@karina.biz",
  ];

  const handleSubmitLogin = () => {
    if (!usersEmails.includes(email)) {
      alert("There is no user!");
      return;
    }

    const hashedPassword = btoa(password);
    setUserEmail(email);
    localStorage.setItem("currentUser", JSON.stringify(email));
    navigate("/");
  };

  return (
    <div className={styles.authorizationMainContainer}>
      <div className={styles.authorizationsWrapper}>
        <div className={styles.authorizationsContainer}>
          <img src={Logo} />
          <form className={styles.form} onSubmit={handleSubmitLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.inputEmail}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className={styles.inputPassword}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className={`${styles.loginButton}`}>
              Login
            </button>
          </form>
          <div className={styles.lineTextContainer}>
            <hr />
            <span className={styles.orWithLine}>or</span>
          </div>
          <button className={styles.facebookButton}>
            <img src={facebook} alt="" className={styles.facebookIcon} />
            Continue with Facebook
          </button>
          <span className={styles.forgotPassword}>Forgot password?</span>
          <span className={styles.spanRegister}>
            Don't you have your account?{" "}
            <strong className={styles.register}>Register</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
