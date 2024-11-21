import { GetUsersInfo } from "./GetUsersInfo"
import { useState, useEffect } from "react";

export const Tabs = () => {
    const [usersInfo, setUsersInfo] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('true')

    useEffect(() => {
        const fetchPosts = async () => {
            const dataUsers = await GetUsersInfo();
            try {
                setUsersInfo([...dataUsers])
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    const objTabs = [
        POSTS: 
    ]
    return (

    )
}