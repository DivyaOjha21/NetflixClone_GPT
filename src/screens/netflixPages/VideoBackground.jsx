import React, { useEffect, useState } from 'react'
import { API_Option } from '../../utils/constants'
import { useMovieVideo } from '../../utils/custom-hooks/useMovieVideo'

const VideoBackground = ({ id }) => {
   console.log(id)
    const [movieVideos, setMovieVideos] = useState(null)
    const [movieId, setMovieId] = useState(null)

    const fetchMovieVideos = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' + id + '/videos?page=1',
            API_Option
        )
        const json = await data.json()
        setMovieVideos(json?.results)
    }
    useEffect(() => {
        fetchMovieVideos()
    }, [id])

    const movie=useMovieVideo(id)
    
    // console.log(movie,'hook data')


    useEffect(() => {
        if (movieVideos) {
            const filteredData = movie.filter(
                (type) => type.type === 'Trailer'
            )

            const mainData = filteredData.length
                ? filteredData[0]
                : movieVideos[0]
            setMovieId(mainData?.key)
        }
    }, [movie])
    return (
        <div className="w-[100%]">
            <iframe
                className="w-screen aspect-video"
                src={
                    'https://www.youtube.com/embed/' +
                    movieId +
                    '?&autoplay=1&mute=1'
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground
