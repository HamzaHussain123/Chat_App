import React from 'react'
import userAvatar from "../../assets/profile.png"

const Message = () => {
    return (
        <div className='chat chat-end p-3'>
            <div className="chat-image avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition-transform duration-300 hover:scale-110">
                    <img src={userAvatar} alt="userPic" />
                </div>
            </div>

            <div className="chat-bubble bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg shadow-blue-400/50 rounded-lg px-4 py-2 text-base max-w-sm transition-all duration-300 hover:shadow-2xl hover:scale-105">
                Hello, how are you?
            </div>

            <div className="chat-footer text-xs opacity-70 text-slate-800 mt-1 flex gap-2 items-center">
                <span className="material-icons text-gray-900">10:41</span>
            </div>
        </div>
    )
}

export default Message
