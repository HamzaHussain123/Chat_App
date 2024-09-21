import { useEffect, useState } from "react"
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation'

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    const setMessages = useConversation(state => state.setMessages)

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch("/api/users", {
                    credentials: 'include'
                })
                console.log("This is the response which i got in fetch", res);

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()
                setConversations(data)
                // Update the Zustand store with the fetched conversations
                setMessages(data)
            } catch (error) {
                console.error("Error fetching conversations:", error)
                toast.error("Failed to fetch conversations")
                setConversations([])
            } finally {
                setLoading(false)
            }
        }

        getConversations()
    }, [setMessages])

    return { loading, conversations }
}





export default useGetConversations
