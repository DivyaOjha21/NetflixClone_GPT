import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return (
        <div className="bg-black">
            <div className="md:-mt-52 -mt-0 relative z-30 md:pl-10 pl-5">
                <MovieList
                    title={'Now Playing'}
                    data={movies?.nowPlayingMovies}
                />
                <MovieList title={'Popular'} data={movies?.popularMovies} />
                <MovieList
                    title={'Trending'}
                    data={movies?.trendingMovies}
                />
                <MovieList
                    title={'Top Rated'}
                    data={movies?.topRated}
                />
            </div>
        </div>
    )
}

export default SecondaryContainer
