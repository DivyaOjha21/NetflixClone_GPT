import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addAiSuggestedMovies} from '../../utils/store-Slices/gptSlice'
import { API_Option, Multi_lang } from '../../utils/constants'

const GptSearch = () => {
    const inputSearch = useRef(null)
    const language = useSelector((store) => store.config.lang)
    const [text, setText] = useState('')
    const [searchAi, setSearchAi] = useState(false)
    const [resultAi, setResultAi] = useState(null)

    const url = 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask'
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key':
                'f8a0553cbbmsh43885668a84a690p1a7051jsn3a382b324698',
            'x-rapidapi-host': 'chatgpt-ai-chat-bot.p.rapidapi.com',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query:
                'suggest me for the query :' +
                text +
                'suggest 10 movie name in Array data type and seperated by comma and start answering with array direct dont write  Sure, here are  movies for you in an array data type, separated by commas and dont send response as string send as array.',
        }),
    }
    const fetchData = async () => {
        try {
            console.log('i am start')
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            const movieListbyAi= JSON.parse(result?.response)
            console.log(movieListbyAi, 'i am result')
            setResultAi(movieListbyAi)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const handleAiSearchClick = () => {
        setText(inputSearch?.current?.value)
        setSearchAi(true)
    }

    useEffect(() => {
        fetchData()
    }, [searchAi])

    const fetchSuggestedMovieData = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
            API_Option
        )
        const json= data.json()
        return json
    }
    const dispatch=useDispatch()
   const func= async ()=>{
     const suggestedMoviePromises = resultAi?.map((movie)=>fetchSuggestedMovieData(movie))
     const suggestedMovieData = await Promise.all(suggestedMoviePromises)
    
   
     dispatch(addAiSuggestedMovies({suggestedMovieName :resultAi,suggestedMovies:suggestedMovieData}))
   }   
   useEffect(() => {
    func()
}, [resultAi])

    return (
        <div>
            <div className="md:mt-[6%] mt-6 w-screen flex justify-center">
                <div className=" bg-black p-3 md:w-4/6 w-5/6 rounded-lg">
                    <input
                        type="search"
                        className="w-4/5 md:p-3 p-2 bg-gray-800 text-white"
                        // placeholder={Multi_lang[language]?.placeHolderText}
                        placeholder='What kind of movie you want to see'
                        ref={inputSearch}
                    />
                    <button
                        className="rounded text-center md:py-3 py-2 bg-red-700 text-white w-1/5"
                        onClick={handleAiSearchClick}
                    >
                        Search
                        {/* {Multi_lang[language]?.search} */}
                    </button>
                </div>
            </div>
           
        </div>
    )
}
export default GptSearch
