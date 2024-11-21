import styles from "./App.module.css";
import { Profile } from "./profile/Profile";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import { UserProvider, Authorization } from "./Authorization/Authorization";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className={styles.mainContainer}>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/users/:user" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Authorization />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
