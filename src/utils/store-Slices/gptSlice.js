

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'GptSlice',
  initialState: {
    gptToggle: false,
    suggestedMovies:null,
    suggestedMovieName:null
  },
  reducers: {
    toggleGpt: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    addAiSuggestedMovies:(state,action)=>{
      const {suggestedMovies,suggestedMovieName}=action.payload
       state.suggestedMovieName = suggestedMovieName
       state.suggestedMovies = suggestedMovies
    }
  }
});

export const { toggleGpt,addAiSuggestedMovies } = gptSlice.actions;
export default gptSlice.reducer;
