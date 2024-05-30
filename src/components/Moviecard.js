import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

export const Moviecard = ({posterPath}) => {
  //console.log(posterPath,"ok")  
  return (
    <div className='w-48 pr-4'>
     <img src={IMAGE_CDN_URL+posterPath}
     alt='MovieCard'
     />
    </div>
  )
}
