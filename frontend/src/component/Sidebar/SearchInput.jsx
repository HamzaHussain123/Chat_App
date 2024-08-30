import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-3 px-4 py-2 bg-white shadow-xl rounded-full transition-all hover:shadow-2xl focus-within:ring-4 focus-within:ring-blue-400'>
            <input
                type="text"
                placeholder='Search here...'
                className='flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-black-600 text-sm px-2'
            />

            <button
                type='submit'
                className='btn btn-circle bg-gradient-to-r from-lime-400 to-emerald-500 text-white hover:bg-gradient-to-l transition-all duration-300 shadow-md'>
                <IoSearchSharp className="w-5 h-5 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput;
