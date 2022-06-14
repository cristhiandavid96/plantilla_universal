import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
// import your route components too
//components
import About from '../pages/about'
import Home from '../pages/home'
import Login from '../pages/login/LoguinForm'
import Register from '../pages/login/RegisterForm'
import Navbar from '../components/navbar'
import Settings from '../pages/settings'
import { AuthProvider } from '../context/authContext'


export default function index() {
  return (
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
      <Routes>
            <Route index element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="about" exact element={<About />} />
            <Route path="settings" exact element={<Settings />} />
        </Routes>
      </AuthProvider>       
    </BrowserRouter>
  )
}
