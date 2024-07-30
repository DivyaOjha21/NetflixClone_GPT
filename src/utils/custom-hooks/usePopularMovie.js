

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store-Slices/movieSlice"; 
import { API_Option } from "../../utils/constants";

export const usePopularMovie = () => {
    const dispatch = useDispatch();
    const fetchPopularMovie = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_Option);
            const json = await response.json();      
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    useEffect(() => {
        fetchPopularMovie();
    }, []); 
};
