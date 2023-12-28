import React from "react";
import { useAppContext } from "../context/AppContext";
import Navigation from "../components/Navigation";
import styleStarred from "../styles/starred.module.css";
import StarredRepositories from "../components/StarredRepositories";
import { useEffect } from "react";

const Starred = () => {
  const {
    getRepos,
    starredRepos,
 
  } = useAppContext();

useEffect(()=> {getRepos()}, [])


  return (
    <main className={styleStarred.starredContainer}>
      <header>
        <nav className={styleStarred.navigation}>
          <Navigation />
        </nav>
        <h1 className={styleStarred.title}>Starred Repositories</h1>
      </header>
      <section className={styleStarred.starredRepositories}>
        {starredRepos.length === 0 ? (
          <span>No starred Repositories :{"("}</span>
        ) : (
          <StarredRepositories />
        )}
      </section>
      <h1 className={styleStarred.title}>Starred Users</h1>
      <section className={styleStarred.starredRepositories}>
        {starredRepos.length === 0 ? (
          <span>No starred Users :{"("}</span>
        ) : (
          <span>Próximamente...</span>
        )}
      </section>
    </main>
  );
};

export default Starred;
