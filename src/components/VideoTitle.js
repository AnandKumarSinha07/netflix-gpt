import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video  pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-3  text-lg w-2/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-3 px-10 text-xl  rounded-lg'>▶Play</button>
        <button className='mx-2 bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-60 rounded-lg'>More Info?</button>
      </div>
    </div>
  )
}

export default VideoTitle