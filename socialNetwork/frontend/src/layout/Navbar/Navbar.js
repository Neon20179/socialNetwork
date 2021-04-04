import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/feed/"><img src="/static/media/home-icon.png" alt="Feed" /></NavLink>
            <NavLink to="/chats/"><img src="/static/media/chat-icon.png" alt="Chats" /></NavLink>
            <NavLink to="/profile/own/"><img src="/static/media/profile-icon.png" alt="Profile" /></NavLink>
        </nav>
    )
}

export default Navbar
