import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [userUrl, setUserUrl] = useState("");
  const [repos, setRepos] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [starredRepo, setStarredRepo] = useState(false);
  const [foundData, setFoundData] = useState(false);
  const [search, setSearch] = useState("");
  const [featuredRepositories, setFeaturedRepositories] = useState(true);


  
  async function  getRepos(){

    const storedStarredRepos = await axios.get("http://localhost:3000/repos") 

    console.log(storedStarredRepos)
    
    setStarredRepos(storedStarredRepos.data.repo);

}

  useEffect(() => {

    getRepos();
  
  }, []);

  const updateRepos = async (repoToUpdate) => {
    try {
      // Reemplaza 'repoId' con la propiedad adecuada que identifica el repositorio
      const repoId = repoToUpdate.id;
     
      await axios.put(`http://localhost:3000/repos/${repoId}`, repoToUpdate);
  
      window.alert('Repositorio actualizado correctamente.');
    } catch (error) {
      console.error('Error al actualizar el repositorio:', error);
  
    }
  };

  const handleDeleteRepo = async (repoToDelete) => {
    try {
      // Realiza la solicitud DELETE al backend para eliminar el repositorio
      await axios.delete(`http://localhost:3000/repos/db/${repoToDelete}`);
  
      // Filtra los repositorios, excluyendo el que se va a eliminar
      const updatedStarredRepos = starredRepos.filter((repo) => repo._id !== repoToDelete._id);
  
      // Actualiza el estado con la nueva lista de repositorios
      setStarredRepos(updatedStarredRepos);
    } catch (error) {
      console.error('Error al eliminar el repositorio:', error);
    }
  };



    const handleStarredRepo = async (repo) => {
    const repoIndex = starredRepos.findIndex((r) => r.id === repo.id);
    const response = await axios.post("http://localhost:3000/repos", repo); 
  };

  return (
    <AppContext.Provider
      value={{
        userUrl,
        setUserUrl,
        repos,
        setRepos,
        repoUrl,
        setRepoUrl,
        starredRepos,
        setStarredRepos,
        starredRepo,
        setStarredRepo,
        handleStarredRepo,
        handleDeleteRepo,
        foundData,
        setFoundData,
        updateRepos,
        search,
        getRepos,
        setSearch,
        featuredRepositories,
        setFeaturedRepositories
      }}
    >
      {children}
    </AppContext.Provider>
  );
  
}
