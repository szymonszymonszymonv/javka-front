import { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './Home'
import TopicDetails from './TopicDetails'
import TopicList from './TopicList'
import TopicCreate from './TopicCreate'
import PostCreate from  './PostCreate'
import RegisterForm from './RegisterForm'
import Layout from './Layout'
import LoginForm from './LoginForm'
import Logout from './Logout'

function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("token") ? true : false)
    }, [])
    return (
        <div>
            <Layout isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics/:topicId" element={<TopicDetails />} />
                <Route path="/topics" element={<TopicList />} />
                <Route path="/topics/create" element={<TopicCreate />} />
                <Route path="/topics/:topicId/reply" element={<PostCreate />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default Main;
