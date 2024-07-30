import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies= useSelector((store)=>store?.movies?.nowPlayingMovies)
  if (movies==null) return;
  const randomIndex=Math.floor( Math.random()*10)
  console.log(randomIndex)
  const mainMovie = movies[randomIndex]
  
  return (
    <>
      <VideoTitle title={mainMovie.title} discription={mainMovie?.overview} data={mainMovie}/>
      <VideoBackground id={mainMovie?.id}/>
    </>
  )
}

export default MainContainer
