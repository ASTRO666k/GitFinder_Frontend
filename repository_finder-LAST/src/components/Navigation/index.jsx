import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import style from "./nav.module.css";

const Navigation = () => {

  const { featuredRepositories } = useAppContext()

  return (
    <nav className={style.nav}>
      <Link onClick={() => {
        featuredRepositories(true)
      }} to={"/"}>Home</Link>
      <Link to={"/starred"}>Starred</Link>
    </nav>
  );
};

export default Navigation;
