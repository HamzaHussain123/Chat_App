import React from 'react'
import GenderCheckbox from '../component/GenderCheckbox.jsx'
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
                <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8 relative z-10'>Sign Up to
                    <span className='text-blue-900'> Chat Application</span>
                </h1>

                <form >
                    <div className='relative' >
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Username

                            </span>

                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none' />
                    </div>

                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Email

                            </span>

                        </label>
                        <input type="email" placeholder='Enter Your Email' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none' />
                    </div>


                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Password

                            </span>

                        </label>
                        <input type="password" placeholder='Enter Your Password' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none' />
                    </div>

                    <GenderCheckbox />

                    <Link to={"/login"} className='text-sm hover:underline text-blue-600 mt-1 inline-block'>
                        Already have an account?

                    </Link>

                    <div>
                        <button className='btn btn-block mt-2  bg-blue-600 hover:bg-blue-700 text-white font-bold  rounded-lg transition-transform duration-300 ease-out transform hover:scale-105 shadow-lg'>
                            Sign Up
                        </button>
                    </div>

                </form>



            </div>

        </div>
    )
}

export default SignUp
