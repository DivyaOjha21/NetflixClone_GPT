

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store-Slices/movieSlice"; 
import { API_Option } from "../constants";

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const fetchPopularMovie = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Option);
            const json = await response.json();
            dispatch(addMovie(json.results));
        } catch (error) {
          
        }
    };
    useEffect(() => {
        fetchPopularMovie();
    }, []); 
};
