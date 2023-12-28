import React from "react";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import style from "./userInfo.module.css";

const UserInfo = ({ user }) => {
  return (
    <div className={style.userInfoContainer}>
      {user && (
        <div className={style.imageFollowers}>
          <img
            src={user.avatar_url}
            alt={`Avatar de ${user.login}`}
            className={style.userImage}
          />
          <div className={style.userInfo}>
            <div>
              <span className={style.userName}>{user.name}</span>
              <h2 className={style.userLogin}>
                {user.login}
                <a href={user.html_url} target="_blank">
                  <FaLink />
                </a>
              </h2>
              {user.bio && <p className={style.userBio}>{user.bio}</p>}
              <div className={style.userLocation}>
                <span>
                  <FaLocationDot />
                  {user.location ? user.location : "somewhere in the world :D"}
                </span>
              </div>
            </div>
            <div>
              <span>Followers</span>
              <h2>{user.followers}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
