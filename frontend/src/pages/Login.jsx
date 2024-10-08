import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const { login, loading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDetault()

        await login(email, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
                <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8 relative z-10'>Login to
                    <span className='text-blue-600'> Chat Application</span>
                </h1>

                <form className='space-y-8 relative z-10' onSubmit={handleSubmit}>

                    <div className='relative' >
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Email

                            </span>

                        </label>
                        <input type="email" placeholder='Enter your Email' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>

                    <div className='relative'>
                        <label className='label p-2'>
                            <span className='text-lg label-text font-medium text-gray-700'>Password

                            </span>

                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-transform duration-300 ease-out transform hover:scale-105 focus:scale-105 shadow-sm focus:outline-none'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <Link to={"/signup"} className='text-sm hover:underline text-blue-600 mt-1 inline-block cursor-pointer'>
                        {"Don't"} have an account?

                    </Link>

                    <div>
                        <button className='btn btn-block  bg-blue-600 hover:bg-blue-700 text-white font-bold  rounded-lg transition-transform duration-300 ease-out transform hover:scale-105 shadow-lg' disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </div>


                </form>



            </div>

        </div>
    )
}

export default Login