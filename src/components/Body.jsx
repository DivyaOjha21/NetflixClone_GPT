import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
} from '@clerk/clerk-react'
import { useSelector } from 'react-redux'

const Body = () => {
    const userName = useSelector((state) => state)
    return (
        <div>
            <div className="absolute bg-black bg-opacity-100 select-none	">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
                    alt=""
                    className="w-[100vw]"
                />
            </div>

            <div className="flex justify-center pt-[10%]">
                <div className=" text-white absolute bg-black w-4/12 p-[5%] bg-opacity-80">
                    <div>
                        <p className="text-lg">You are not login?</p>
                    </div>
                    <div className="text-center bg-red-700 mt-3">
                        <SignedOut>
                            <SignInButton className="p-2 rounded">
                                Sign In
                            </SignInButton>
                        </SignedOut>
                        <SignedIn className="">
                            Hi, {userName?.user?.firstName} <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
