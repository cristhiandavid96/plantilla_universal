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
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="home" element={<Navbar><Home /></Navbar>} />
            <Route path="about" exact element={<Navbar><About /></Navbar>} />
            <Route path="settings" exact element={<Navbar><Settings /></Navbar>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>

  )
}
