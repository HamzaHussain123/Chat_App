import React from 'react'
// import userIcon from "../../assets/profile.png"
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIndex }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id


    return (
        <>
            <div className={`flex gap-4 items-center hover:bg-gradient-to-r from-purple-300 to-indigo-500 rounded-lg p-3 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${isSelected ? "bg-sky-500" : ""

                }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                {/* Avatar Section */}
                <div className='avatar online'>
                    <div className='w-14 rounded-full border-2 border-white shadow-md'>
                        <img src={conversation.profilePic} alt="User Avatar" />
                    </div>
                </div>

                {/* Text Section */}
                <div className='flex flex-col flex-1'>
                    <div className="flex justify-between">
                        <p className='font-bold text-gray-800 text-lg'>{conversation.username}</p>

                    </div>

                </div>
            </div>

            {/* Divider */}
            {!lastIndex && <div className="divider my-1 h-0.5 bg-gray-200"></div>}
        </>
    )
}

export default Conversation;
