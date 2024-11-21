import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";
import VectorHome from "../assets/VectorHome.svg";
import Vector2 from "../assets/Vector2.svg";
import Vector3 from "../assets/Vector3.svg";
import Vector4 from "../assets/Vector4.svg";
import Vector5 from "../assets/Vector5.svg";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import SearchInput from "./searchInput/SearchInput";
import { useMediaQuery } from "react-responsive";

export function Header() {
  const isSmallScreen = useMediaQuery({ query: "(min-width: 437px)" });

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <Link to="/">
          <img src={Logo} alt="" className={styles.navLogo} />
        </Link>
        <SearchInput />
        <div className={styles.menuContainer}>
          <Link to={"/"}>
            <button>
              <img src={VectorHome} alt="" />
            </button>
          </Link>
          {isSmallScreen && (
            <>
              <button>
                <img src={Vector2} alt="" className={styles.vector} />
              </button>
              <button>
                <img src={Vector3} alt="" className={styles.vector} />
              </button>
              <button>
                <img src={Vector4} alt="" className={styles.vector} />
              </button>
              <button>
                <img src={Vector5} alt="" className={styles.vector} />
              </button>
            </>
          )}
          <Link to={"/login"}>
            <button>
              <img src={Avatar()} className={styles.avatar} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
