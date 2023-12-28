import React from "react";
import FeatureRepo from "./FeatureRepo";
import style from './featuredRepositories.module.css'

const FeaturedRepositories = () => {
  return (
    <div className={style.featuredRepositories}>
      <FeatureRepo
        creatorName={`rodriabregu`}
        repositoryDescription={`Una página destinada a ser un centro de información de toda índole relacionada a tecnología.`}
        repositoryStars={`29`}
        repositoryTitle={`resources-page`}
        repositoryUrl={`https://github.com/rodriabregu/resources-page.git`}
      />
      <FeatureRepo
        creatorName={`apilayer-admin`}
        repositoryDescription={`A collective list of free APIs for use in software and web development.`}
        repositoryStars={`257K`}
        repositoryTitle={`public-apis`}
        repositoryUrl={`https://github.com/public-apis/public-apis`}
      />
      <FeatureRepo
        creatorName={`yangshun`}
        repositoryDescription={`Curated coding interview preparation materials for busy software engineers.`}
        repositoryStars={`95.1K`}
        repositoryTitle={`tech-interview-handbook`}
        repositoryUrl={`https://github.com/yangshun/tech-interview-handbook.git`}
      />
      <FeatureRepo
        creatorName={`30-seconds`}
        repositoryDescription={`Short code snippets for all your development needs.`}
        repositoryStars={`116K`}
        repositoryTitle={`30-seconds-of-code`}
        repositoryUrl={`https://github.com/30-seconds/30-seconds-of-code.git`}
      />
    </div>
  );
};

export default FeaturedRepositories;
