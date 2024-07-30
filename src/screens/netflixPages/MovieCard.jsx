import React from 'react'
import { Card_Img } from '../../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({data}) => {
  if(!data) return null
  return (
    <div className='w-32 mr-4'>
      <Link to={'./movies' } state={data}>
      <img src={Card_Img+data.poster_path} />
      </Link>
    </div>
  )
}

export default MovieCard
