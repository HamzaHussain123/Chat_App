import { create } from 'zustand'



const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => {
        console.log('Setting selected conversation:', selectedConversation)
        set({ selectedConversation })
    },

    messages: [],
    setMessages: (messages) => {
        console.log('Setting messages:', messages)
        set({ messages })
    }
}))

export default useConversation

