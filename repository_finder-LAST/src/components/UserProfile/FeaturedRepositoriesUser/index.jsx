import React from 'react'
import FeatureRepo from "../../FeaturedRepositories/FeatureRepo";
import style from './FeaturedRepositoriesUser.module.css'


const FeaturedRepositoriesUser = ({repos}) => {
  return (
    <div className={style.FeaturedRepositoriesUser}>
        {repos &&
          repos.map((repo) => (
            <FeatureRepo
              repositoryDescription={repo.description}
              repositoryStars={repo.stargazers_count}
              repositoryTitle={repo.name}
              repositoryUrl={repo.html_url}
              key={repo.id}
            />
          ))}
    </div>
  )
}

export default FeaturedRepositoriesUser