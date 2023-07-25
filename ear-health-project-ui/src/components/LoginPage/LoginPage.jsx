import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../services/apiClient.JS";

const LoginPage = ({ userUpdater, loginHandler }) => {
  // establish states that track form changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  //navigation for redirecting once registration
  let navigate = useNavigate();

  //state that hold the error taht happen when logging in

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginInfo = JSON.stringify({
      email,
      password,
    });

    const { data, error } = await ApiClient.loginUser(loginInfo);

    if (error) {
      setLoginError(error);
    }

    if (data?.user) {
      userUpdater(data.user);
      console.log("user received token is ", data.token);
      ApiClient.setToken(data.token);
      loginHandler();
      navigate("/");
    }
  };

  return (
    <div>
      <div className="split-screen">
        <div className="left">
          <section className="copy">
            <h1>Explore your options here at Earie</h1>
            <p>Licensed professionals are here for all you hearing needs</p>
          </section>
        </div>
        <div className="right">
          <form onSubmit={handleLogin}>
            <section className="copy">
              <h2>Sign In</h2>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"
                alt="login icon"
              />
              <div className="login-container"></div>
            </section>
            <div className="input-container-name">
              <input
                className="form-input"
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Email"
              />
            </div>
            <div className="input-container-password">
              <input
              className="form-input"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                placeholder="Password"
              />
            </div>
            <button className="login-bttn" type="submit">
              Login
            </button>
            <p>{loginError}</p>
          </form>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default LoginPage;
