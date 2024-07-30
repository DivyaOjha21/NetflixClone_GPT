import React from 'react'
import { usePopularMovies } from '../utils/custom-hooks/useMovie'
import MainContainer from '../screens/netflixPages/MainContainer'
import SecondaryContainer from '../screens/netflixPages/SecondaryContainer'
import { usePopularMovie } from '../utils/custom-hooks/usePopularMovie'
import { useTrendingMovies } from '../utils/custom-hooks/useTredingMovies'
import { useTopRatedMovies } from '../utils/custom-hooks/useTopRatedMovies'
import { useSelector } from 'react-redux'
import GptPage from '../screens/gptPages/GptPage'

const MainPage = () => {
     const gptKey = useSelector((store) => store.gptToggle)
    usePopularMovies()
    usePopularMovie()
    useTrendingMovies()
    useTopRatedMovies()


    return (
        <div className="">
            {gptKey.gptToggle === true ? (
                <GptPage />
            ) : (
                <>
                    {' '}
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    )
}

export default MainPage
