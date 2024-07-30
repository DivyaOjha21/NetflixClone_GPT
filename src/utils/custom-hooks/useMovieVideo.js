import { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store-Slices/movieSlice"; 
import { API_Option } from "../../utils/constants";


export const useMovieVideo=(id)=>{
    const [movieVideos, setMovieVideos] = useState(null)
    const fetchMovieVideos = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' + id + '/videos?page=1',
            API_Option
        )
        const json = await data.json()
        setMovieVideos(json.results)
        return json.results
        
    }
    
    useEffect(() => {
        fetchMovieVideos()
    }, [])
    return movieVideos
}



// useEffect(() => {
//     if (movieVideos) {
//         const filteredData = movieVideos.filter(
//             (type) => type.type === 'Trailer'
//         )

//         const mainData = filteredData.length
//             ? filteredData[0]
//             : movieVideos[0]
//         setMovieId(mainData?.key)
//     }
// }, [movieVideos])