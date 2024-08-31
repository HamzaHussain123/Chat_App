import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[450px] flex flex-col bg-gray-200 rounded-lg shadow-2xl border border-gray-300 overflow-hidden'>

            {/* Header section with recipient name */}
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white flex items-center shadow-md">
                <span className='text-sm font-semibold mr-2'>To:</span>
                <span className='text-lg font-bold'>Taimoor Habib</span>
            </header>

            {/* Messages component */}
            <main className="flex-grow bg-gray-100 p-4 space-y-4 overflow-y-auto">
                <Messages />
            </main>

            {/* Input section */}
            <footer className="bg-gray-200 p-3 border-t border-gray-300">
                <MessageInput />
            </footer>
        </div>
    )
}

export default MessageContainer
