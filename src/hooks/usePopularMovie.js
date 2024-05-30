import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovie = () => {
    
  const dispatch=useDispatch(); 
  
  const PopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
         API_OPTIONS
      );
      const json= await data.json();
      console.log("popular Movies",json);
      dispatch(addPopularMovies(json.results))
      
    } catch (error) {
      console.log("Eroor", error);

    }
  };

  useEffect(()=>{
    PopularMovies();
  },[])

  return(
    <div>

    </div>
  )
};

export default usePopularMovie;
