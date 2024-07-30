import React, { useEffect } from 'react'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
} from '@clerk/clerk-react'
import { ClerkProvider } from '@clerk/clerk-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGpt } from '../utils/store-Slices/gptSlice'
import { addUser } from '../utils/store-Slices/userSlice'
import { changeLang } from '../utils/store-Slices/configSlice'
import { Total_Lang } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const { user } = useUser()
    const dispatch = useDispatch()
    const userName = useSelector((state) => state)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            dispatch(addUser(user))
            navigate('./main')
        } else {
            navigate('./')
        }
    }, [user])

    const onHandleGptClick = () => {
        dispatch(toggleGpt())
    }
    const gptKey = useSelector((store) => store.gptToggle.gptToggle)

    const handleLangChange = (e) => {
        dispatch(changeLang(e.target.value))
    }

    return (
        <div className="bg-black">
            <div className="px-8 py-2 flex flex-col md:flex-row   justify-between bg-gradient-to-b from-black to-slate-900 w-screen">
                <div className='mx-auto md:mx-0'>
                    <img
                        src={
                            'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                        }
                        alt=""
                        className="w-44 "
                    />
                </div>

                <div className="w-full md:w-3/12 flex justify-between my-auto">
                    {gptKey && (
                        <div>
                            <select
                                onClick={handleLangChange}
                                className="bg-slate-800 flex-col text-white p-2 rounded"
                            >
                                {' '}
                                {Total_Lang &&
                                    Total_Lang.map((el) => (
                                        <option value={el?.langkey}>
                                            {el?.lang}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}

                    <button
                        className="bg-red-600 px-5 rounded mr-2 text-white py-2"
                        onClick={onHandleGptClick}
                    >
                        {gptKey
                            ? 'Home Page'
                            : "Netflix Gpt"}
                    </button>
                    <div className=" text-white">
                        <SignedOut>
                            <SignInButton>Sign In</SignInButton>
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

export default Header
