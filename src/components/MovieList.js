import React from 'react'
import { Moviecard } from './Moviecard'

export const MovieList = ({title,movie}) => {
    //console.log("title "+title);
    //console.log(movie,"dekho");
  return (
    <div className='px-6'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'> 
          <div className='flex'>
            {movie.map(movie=> <Moviecard key={movie.id} posterPath={movie.poster_path}/>)}

         </div>
       </div>  
    </div>
  )
}
