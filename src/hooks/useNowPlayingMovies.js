 import { useDispatch } from "react-redux";
 import { API_OPTIONS } from "../utils/constants";
 import {addNowPlayingMovies} from "../utils/moviesSlice"
 import { useEffect } from "react";

 // Fetch data from TMDB Api and update store
 const useNowplayingMovies=()=>{
   
  const dispatch = useDispatch();
  const getNowplayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );
       const json = await data.json();
       console.log("VideoBckground",json); 
       dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error, "Error in the api call");
    }
  };

  useEffect(() => {
    getNowplayingMovies();
  },[]);
 }
 

 export default useNowplayingMovies
