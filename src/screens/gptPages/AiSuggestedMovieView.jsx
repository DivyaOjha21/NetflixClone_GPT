import React from 'react'
import VideoBackground from '../netflixPages/VideoBackground'
import { useLocation } from 'react-router-dom'

const AiSuggestedMovieView = () => {
    const location = useLocation()
   
    return (
        <div className=" ">
            <VideoBackground id={location.state.id} />
            <div className="bg-slate-800 text-white md:px-20 px-5 py-12 h-screen w-screen">
                <p className="text-xl font-bold">
                   Title : {location.state.title || location.state.original_title}
                </p>
                <p className="text-base my-3">{location.state.overview}</p>
                <div className='flex justify-between mt-3'>
                    <p>Rating :  {location.state.vote_average}⭐
                        (
                        {location.state.vote_count})
                    </p>
                    <p>Released On : {location.state.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default AiSuggestedMovieView
