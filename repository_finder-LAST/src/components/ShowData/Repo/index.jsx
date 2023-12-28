// COSAS A TERMINAR



import React, {useState} from "react";
import style from "./repo.module.css";
import { useAppContext } from "../../../context/AppContext";
import { FaArrowRightLong,  FaFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Repo = () => {
  const {
    setRepoUrl,
    repos,
    setRepos,
    starredRepos,
    handleStarredRepo,
  } = useAppContext();
  const [selectDefault, setSelectDefault] = useState(true);

  const highToLow = () => {
    const highToLowRepos = [...repos];
    highToLowRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    setRepos(highToLowRepos);
  };

  const lowToHigh = () => {
    const lowToHighRepos = [...repos];
    lowToHighRepos.sort((a, b) => a.stargazers_count - b.stargazers_count);
    setRepos(lowToHighRepos);
  };

  const orderReposStars = (e) => {
    const select = e.target.value;
    setSelectDefault(false)

    if (select === "highToLow") {
      highToLow();
    } else if (select === "lowToHigh") {
      lowToHigh();
    }
  };

  return (
    <div className={style.reposContainer}>
      {repos.length > 1 ? (
        <div className={style.ordenedRepos}>
          <span>Ordened by stars: </span>
          <select name="stars" onChange={orderReposStars}>
            {selectDefault ? <option value="default">Default</option> : null}
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </div>
      ) : null}
      {repos.map((repo) => (
        <div key={repo.id} className={style.repoContainer}>
          <div className={style.repoContent}>
            <div className={style.repoInfoContainer}>
              <img
                src={repo.owner.avatar_url}
                alt={`Avatar of ${repo.owner.login}`}
                className={style.userImage}
              />
              <div className={style.repoInfo}>
                <span>{repo.owner.login}</span>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
              </div>
            </div>
            <div className={style.repoStars}>
              <span>stars</span>
              <h2>{repo.stargazers_count}</h2>
            </div>
          </div>
          <div className={style.buttons}>
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
            <Link
              to={`/profile?name=${repo.owner.login}`}
              className={`${style.button} ${style.buttonLink}`}
              onClick={() => {
                setRepoUrl(repo.url);
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

export default Repo;
