import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { IMAGE_BG_URL } from '../utils/constants'


const GptSearch = () => {
  return (
    <div className=''>
         <div className="absolute -z-10">
        <img
          src={IMAGE_BG_URL}
          alt=""
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggesions/>
    </div>
  )
}

export default GptSearch