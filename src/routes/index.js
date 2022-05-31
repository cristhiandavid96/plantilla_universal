import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
// import your route components too
//components
import About from '../components/About'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Settings from '../components/Settings'


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
