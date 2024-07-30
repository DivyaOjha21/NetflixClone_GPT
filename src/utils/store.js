import { configureStore } from "@reduxjs/toolkit";
import signedUser from './store-Slices/userSlice'
import movieReducer from "./store-Slices/movieSlice";
import gptReducer from "./store-Slices/gptSlice";
import configReducer from "./store-Slices/userSlice";

const store = configureStore({
    reducer : {
        user: signedUser,
        movies : movieReducer,
        gptToggle : gptReducer,
        config:configReducer

    }
})

export default store