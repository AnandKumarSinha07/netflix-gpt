import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const PopularMovies = ({backdropPath}) => {
    console.log("aaaa",backdropPath);
  return (
    <div>
      <img
        src={IMAGE_CDN_URL+backdropPath}
        alt='Popular Movies'
      />
    </div>
  )
}

export default PopularMovies