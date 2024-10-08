import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

const App = () => {
  const { authUser } = useAuthContext()

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
