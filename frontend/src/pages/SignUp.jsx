import React, { useState } from 'react'
import GenderCheckbox from '../component/GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp.jsx'


const SignUp = () => {

    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""

    })
    const { loading, signup } = useSignUp()


    const handleCheckboxChange = (gender) => {
        setformData({ ...formData, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(formData)

    }


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
                <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8 relative z-10'>Sign Up to
                    <span className='text-blue-900'> Chat Application</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='relative' >
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Username

                            </span>

                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={formData.username}
                            onChange={(e) => setformData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Email

                            </span>

                        </label>
                        <input type="email" placeholder='Enter Your Email' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={formData.email}
                            onChange={(e) => setformData({ ...formData, email: e.target.value })}
                        />
                    </div>


                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Password

                            </span>

                        </label>
                        <input type="password" placeholder='Enter Your Password' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={formData.password}
                            onChange={(e) => setformData({ ...formData, password: e.target.value })}
                        />
                    </div>


                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Confirm  Password

                            </span>

                        </label>
                        <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={formData.confirmPassword}
                            onChange={(e) => setformData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>



                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={formData.gender} />

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
