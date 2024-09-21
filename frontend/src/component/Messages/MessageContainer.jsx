import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/AuthContext' // Add this import

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='md:min-w-[450px] flex flex-col bg-gray-200 rounded-lg shadow-2xl border border-gray-300 overflow-hidden'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white flex items-center shadow-md">
                        <span className='text-sm font-semibold mr-2'>To:</span>
                        <span className='text-lg font-bold'>{selectedConversation?.username}</span>
                    </header>

                    {/* Messages component */}
                    <main className="flex-grow bg-gray
                -100 p-4 space-y-4 overflow-y-auto">
                        <Messages />
                    </main>

                    {/* Input section */}
                    <footer className="bg-gray-200 p-3 border-t border-gray-300">
                        <MessageInput />
                    </footer>
                </>
            )}

            {/* Header section with recipient name */}


        </div>
    )
}

const NoChatSelected = () => {
    const { authUser } = useAuthContext() // Add this line

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold text-purple-700 mb-2">Welcome, {authUser?.username || 'User'}!</h2>

                <p className="text-gray-800 font-semibold bg-gradient-to-r from-purple-200 to-blue-200 p-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
                    Select a chat to start your messaging adventure!
                </p>

                <TiMessages className="text-5xl text-blue-500 animate-bounce" />
            </div>
        </div>
    )
}


export default MessageContainer
