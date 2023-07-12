import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../Navbar/Navbar.jsx"
import Home from "../Home/Home.jsx"
import RegisterPage from "../RegisterPage/RegisterPage"
import LoginPage from "../LoginPage/LoginPage"
import Footer from "../Footer/Footer"
import Forum from "../Forum/Forum"
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"

function App() {
  
  return (
    <>
      <div>
        <Navbar></Navbar>

        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/register" element = {<RegisterPage/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/forum" element = {<Forum/>}/>
        </Routes>
        </BrowserRouter>

        <Footer/>
        
      </div>
    </>
  )
}

export default App
