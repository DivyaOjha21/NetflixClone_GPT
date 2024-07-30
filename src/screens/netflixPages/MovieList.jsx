import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, data }) => {
    return (
        <div className='p-2'>
            <p className='py-2 text-2xl text-white'>{title}</p>
            <div className='flex overflow-x-scroll'>
                <div className="flex">
                    {data?.map((movie) => (
                        <MovieCard data={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
