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
import RegisterDoctor from '../RegisterDoctor/RegisterDoctor'

function App() {

  //useState for login boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //loginHandler
  const loginHandler = () => {
    setIsLoggedIn(true)
  }
  
  return (
    <>
      <div>
        <Navbar></Navbar>

        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/register" element = {<RegisterPage loginHandler = {loginHandler}/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/forum" element = {<Forum/>}/>
          <Route path = "/register/doctor" element = {<RegisterDoctor loginHandler = {loginHandler}/>}/>
        </Routes>
        </BrowserRouter>

        <Footer/>
        
      </div>
    </>
  )
}

export default App
