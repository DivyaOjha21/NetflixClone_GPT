import { Outlet, RouterProvider, Routes } from "react-router-dom"
import Body from './components/Body'
import Header from "./components/Header";
import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from 'react-router-dom'
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import AiSuggestedMovieView from "./screens/gptPages/AiSuggestedMovieView";
function App() {  
  return (<>
   <Header />
   <Outlet/>
  </>
  )
}

export default App

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: '/',
        element: <Body />
    },
      {
        path: '/main',
        element: <MainPage />
    },
      {
        path: '/main/movies',
        element: <AiSuggestedMovieView />
    },
    ]
  },
  

]);



