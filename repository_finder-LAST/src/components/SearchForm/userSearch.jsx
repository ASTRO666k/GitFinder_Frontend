import React, { useEffect } from "react";
import style from "./searchForm.module.css";
import { useAppContext } from "../../context/AppContext";

const SearchFormUser = ({ setIsLoading }) => {
  const { setRepos, setFoundData, search, setSearch, setFeaturedRepositories } = useAppContext();

  const userSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const input = form.get("search");
    setSearch(input);
    setFeaturedRepositories(false);
  };


useEffect(() => {
    if (search.length > 0) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data || data.items.length === 0) {
            setRepos([]);
            setIsLoading(false);
            setFoundData(true);
          } else {
            setRepos(data.items);
            setIsLoading(false);
            setFoundData(false);
          }
        });
    } else if (search.length === 0) {
      setFeaturedRepositories(true);
      setIsLoading(false);
      setRepos([]);
    }
  }, [search]);

  return (
    <form action="" onSubmit={userSearch} className={style.form}>
      <input
        type="text"
        placeholder="Search users or repositories"
        name="search"
      />
      <button type="submit" onSubmit={userSearch}>
        Search User
      </button>
    </form>
  );

};

export default SearchFormUser;