import React from "react";
import { useAppContext } from "../../context/AppContext";
import {  FaTrashCan, FaArrowsRotate, FaArrowRightLong} from "react-icons/fa6";
import { Link } from "react-router-dom";
import style from "./../ShowData/Repo/repo.module.css";


const StarredUsers = () => {
  const {
    setRepoUrl,
    starredRepos,
    handleDeleteRepo,
    updateRepos,
  } = useAppContext();


 

  return (

    <div className={style.reposContainer}>
      {starredRepos.map(({results,_id}) => (
        <div key={results[0].id} className={style.repoContainer}>
          <div className={style.repoContent}>
            <div className={style.repoInfoContainer}>
              <img
                src={results[0].owner.avatar_url}
                alt={`Avatar of ${results[0].owner.login}`}
                className={style.userImage}
              />
              <div className={style.repoInfo}>
                <span>{results[0].owner.login}</span>
                <h2>{results[0].name}</h2>
                <p>{results[0].description}</p>
              </div>
            </div>
          </div>
          <div className={style.buttons}>
            <button
              className={`${style.button} ${style.buttonDel}`}
              onClick={() => {
                handleDeleteRepo(_id);
              
                window.location.reload();
              }}
            >
              {starredRepos.some((r) => r.id === results[0].id) ? (
                <FaTrashCan className={style.buttonIcon} />
              ) : (
                <FaTrashCan className={style.buttonIcon} />
              )}
            </button>

            <button
                 className={`${style.button} ${style.buttonStar}`}
                    onClick={() => {
                    updateRepos(results[0]);  
   
               }}
                  >
                   {starredRepos.some((r) => r.id === results[0].id) ? (
                    <FaArrowsRotate className={style.buttoIcon} />
                        ) : (
                     <FaArrowsRotate className={style.buttonIcon} />
               )}
            </button>

            <Link
              to={`/profile?name=${results[0].name}`}
              className={`${style.button} ${style.buttonLink}`}
              onClick={() => {
                setRepoUrl(results[0].url);
              }}
            >
              <FaArrowRightLong className={style.buttonIcon} />
            </Link>
            
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarredUsers;
