import React from 'react'
import  {MovieList}  from './MovieList'
import { useSelector } from 'react-redux'

 const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  // const popular=useSelector(store=>store.movies);
  // console.log("king",popular);
  
  
  console.log("anand",movies);
  return movies.nowPlayingMovies&&(
    <div className=' bg-black'>
    <div className='-mt-52 pl-12 relative z-20'>
      <MovieList 
      title={"Now Playing"} 
      movie={movies.nowPlayingMovies} 
       />

      <MovieList
       title={"Recent"}
       movie={movies.nowPlayingMovies} 
       />
      <MovieList
       title={"Trending"}
       movie={movies.nowPlayingMovies} 
       />

      <MovieList
       title={"Action"}
       movie={movies.nowPlayingMovies} 
       />
      
    </div>
    </div>
  )
}

export default SecondaryContainer
