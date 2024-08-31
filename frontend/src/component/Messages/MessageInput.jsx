import React from 'react';
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
    return (
        <form className="px-4 my-3">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="input input-bordered input-primary w-full pr-12 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center p-3 text-primary hover:text-primary-focus transition-all duration-300 transform hover:scale-110"
                >
                    <IoIosSend size={24} />
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
