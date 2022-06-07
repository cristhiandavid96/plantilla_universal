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
import Navbar from '../components/navbar'
import Settings from '../pages/settings'


export default function index() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" exact element={<About />} />
            <Route path="settings" exact element={<Settings />} />
        </Routes>
    </BrowserRouter>
  )
}
