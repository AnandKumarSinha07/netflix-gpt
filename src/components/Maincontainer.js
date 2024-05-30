import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


function Maincontainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
   
  if (movies === null) return;

  const mainmovies = movies[0];
  //console.log(mainmovies);

  const {original_title,overview,id}=mainmovies;
  return (
    <div>  
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  movie_id={id}/>
    </div>
  );
}

export default Maincontainer;
