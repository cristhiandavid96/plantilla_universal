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
import PrivateRoute from './privateRoute'
import InitForm from '../pages/login/InitForm'


export default function index() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="initial" element={<InitForm />} />
            <Route path="home" element={<PrivateRoute><Navbar><Home /></Navbar></PrivateRoute>} />
            <Route path="about" exact element={<PrivateRoute><Navbar><About /></Navbar></PrivateRoute>} />
            <Route path="settings" exact element={<PrivateRoute><Navbar><Settings /></Navbar></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>

  )
}
