import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

const LogoutButton = () => {
    return (
        <div className='mt-auto'>
            <button
                className='flex items-center justify-center p-3 rounded-full bg-red-50 hover:bg-white-800 shadow-md hover:shadow-lg transition-all duration-300'>
                <IoLogOutOutline className='w-6 h-6 text-red-600 hover:text-black transition-colors duration-300' />
            </button>
        </div>
    )
}

export default LogoutButton
