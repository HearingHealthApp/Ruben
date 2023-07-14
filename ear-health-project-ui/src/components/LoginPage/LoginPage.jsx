import React from 'react'
import "./LoginPage.css"
import { useState } from 'react'

const LoginPage = () => {

  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  
  //need submit handler and need within from tag



  return (
    <div>
      <div className='login-container'>
        <form className='login-form' >
          <div className='welcome'>
            <p>Login</p> <br></br>
          </div>
          <div className='login-inputs'>
          <label>Email:</label>
          <input
          
          type='email'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          required
          placeholder='Email'
          />
          <label>Password</label>
          <input
          type="text"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          required
          placeholder='Password'
          />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage