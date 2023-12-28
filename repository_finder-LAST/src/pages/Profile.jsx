import Navigation from "../components/Navigation";
import UserProfile from "../components/UserProfile";
import { useAppContext } from "../context/AppContext";
import style from "../styles/profile.module.css";
import ErrorPage from "./ErrorPage";

const Profile = () => {
  const { repos } = useAppContext();

  return (
    <div className={style.profileContainer}>
      {repos.length > 0 ? (
        <div>
          <header>
            <nav>
              <Navigation />
            </nav>
            <UserProfile />
          </header>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Profile;
