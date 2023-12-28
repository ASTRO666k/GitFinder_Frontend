import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "./featureRepo.module.css";

const FeatureRepo = ({
  creatorName,
  repositoryTitle,
  repositoryDescription,
  repositoryStars,
  repositoryUrl,
}) => {
  return (
    <div className={style.featureRepoContainer}>
      <header>
        <span>{creatorName}</span>
        <h2>{repositoryTitle}</h2>
        <p>{repositoryDescription}</p>
      </header>
      <footer>
        <div className={style.featureRepoStars}>
          <span>stars</span>
          <h2>{repositoryStars}</h2>
        </div>
        <a href={repositoryUrl} target="_blank">
          <FaArrowRightLong />
        </a>
      </footer>
    </div>
  );
};

export default FeatureRepo;
