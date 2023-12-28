import React from "react";
import { FaLink, FaFolderOpen } from "react-icons/fa6";
import { useAppContext } from "../../../context/AppContext";
import style from "./repoSelected.module.css";

const RepoSelected = ({ repo }) => {
  const { starredRepos, handleStarredRepo } = useAppContext();

  return (
    <div>
      {repo && (
        <div className={style.repoSelected}>
          <div className={style.repoInfo}>
            <div className={style.repoAbout}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </div>
            <div className={style.repoStars}>
              <span>Stars</span>
              <h2>{repo.stargazers_count}</h2>
            </div>
          </div>
          <div className={style.anotherRepoInfo}>
            <span className={style.repoLink}>
            <button
              className={`${style.button} ${style.buttonStar}`}
              onClick={() => {
                handleStarredRepo(repo);
                window.alert(`Repositorio (${repo.name}) guardado correctamente.`);
              }}
            >
              {starredRepos.some((r) => r.id === repo.id) ? (
                <FaFolderOpen className={style.buttonIcon} />
              ) : (
                <FaFolderOpen className={style.buttonIcon} />
              )}
            </button>
              <a href={repo.html_url} target="_blank">
                <FaLink />
              </a>
            </span>
            <div className={style.repoTopicContainer}>
              {repo.topics.slice(0, 10).map((topic) => (
                <span key={topic} className={style.repoTopic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoSelected;
