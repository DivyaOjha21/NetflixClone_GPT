import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../netflixPages/MovieList';
import AiSuggestedMovieView from './AiSuggestedMovieView';



const GptMovieSuggetions = () => {
    const { suggestedMovieName, suggestedMovies } = useSelector(
        (store) => store.gptToggle
    );
    const [show, setShow] = useState(false); 
    if (!suggestedMovieName || !suggestedMovies) return null;

   
    return (
        <div className="flex px-2 md:px-32 bg-black mt-24 bg-opacity-90 w-screen">
            <div className="w-full">
                {!show ? (
                    <>
                        {suggestedMovieName &&
                            suggestedMovieName.map((movieData, index) => (
                                <MovieList
                                    title={movieData}
                                    data={suggestedMovies[index].results}
                                    key={index} 
                                    onClick={() => {
                                        console.log("Movie clicked");
                                        setShow(true);
                                    }}
                                />
                            ))}
                    </>
                ) : (
                    <AiSuggestedMovieView data={897459} />
                )}
            </div>
        </div>
    );
};

export default GptMovieSuggetions;
