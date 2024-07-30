import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trendingMovies: null,
        topRated:null
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrending: (state, action) => {
            state.trendingMovies = action.payload
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload
        },
    },
})

export const { addMovie, addPopularMovies,addTrending ,addTopRated} = movieSlice.actions
export default movieSlice.reducer
