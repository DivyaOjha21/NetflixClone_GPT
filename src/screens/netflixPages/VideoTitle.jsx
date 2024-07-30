import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title,discription,data}) => { 
  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black md:p-32 px-4 text-white'>
     
      <h1 className='md:mt-24 mt-24 md:text-3xl text-base font-bold '>{title}</h1>
      <h1 className='hidden md:inline-block mt-2 text-sm md:text-lg font-thin w-5/12'>{discription.slice(0,200)}</h1>
      <div className='my-5 flex'>
        <Link to={'./movies'} state={data}>
        <button className='px-6 py-2 bg-slate-500 rounded md:w-30 ' >Play ▶</button>
        </Link>
        <button className='hidden md:inline-block px-6 py-2 bg-slate-500 rounded w-30 ml-4'>Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
