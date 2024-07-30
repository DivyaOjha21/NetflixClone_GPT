import React, { useRef, useState } from 'react'
import { loginFormValidation } from '../utils/loginValidation'
import Header from './Header'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from '@clerk/clerk-react'

const Login = () => {
    const [signIn, setSignIn] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showError, setShowError] = useState(false)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const signInButton = () => {
        setSignIn(!signIn)
    }

    const onShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleFormClick = () => {
        const msg = loginFormValidation(
            email?.current?.value,
            password?.current?.value,
            name?.current?.value
        )
        setShowError(msg)
       
    }

    return (
        <div>
            <Header />
            {/* <div className="absolute bg-black bg-opacity-100 select-none	">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
                    alt=""
                    className="w-[100vw]"
                />
            </div> */}
            <h1>hiii</h1>
           
            {/* <form className="absolute bg-black bg-opacity-75 p-9 left-1/3 w-3/12  text-white top-1/4 rounded" onSubmit={(e)=>e.preventDefault()}>
                <h1 className=" text-3xl font-bold my-3">
                    {signIn ? 'Sign In Form' : 'Sign Up Form'}
                </h1>
                {signIn && (
                    <input
                      
                        type="text"
                        className="my-3 p-2 w-full bg-gray-800"
                        placeholder="Your Name"
                        ref={name}
                    />
                )}
                <input
                    type="email"
                    className="my-3 p-2 w-full bg-gray-800"
                    placeholder="Email"
                    ref={email}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="my-3 p-2 w-full  bg-gray-800"
                    placeholder="password"
                    ref={password}
                />
                <input
                    type="checkbox"
                    className="mr-1"
                    onChange={onShowPassword}
                />
                Show Password
                <p className='text-red-700 my-3'>{showError }</p>
                <button
                    className="my-3 p-2 w-full bg-red-700 rounded cursor-pointer"
                    onClick={handleFormClick}
                >
                    {signIn ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="my-3 ">
                    {signIn ? 'Already Registered' : 'New to NetflixGpt ? '}
                    <span
                        onClick={signInButton}
                        className="cursor-pointer underline"
                    >
                        {signIn ? 'Sign In ' : 'Sign Up'}.
                    </span>
                </p>
            </form> */}
        </div>
    )
}

export default Login
