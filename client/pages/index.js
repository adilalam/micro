'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [token, setToken] = useState()
    useEffect(() => {
        let token = localStorage.getItem('user-data');
        token = JSON.parse(token)?.token;
        setToken(token)
    }, [])

    axios.get('http://localhost:4000/api/user/current-user', {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })

    if(!token) {
        return (
            <div>You are not login</div>
        )
    }

    return (
        <div>Main Page</div>
    )
}

export default Main;