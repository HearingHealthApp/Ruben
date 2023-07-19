import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../services/apiClient.JS";

const LoginPage = ({userUpdater, loginHandler}) => {
  // establish states that track form changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      setRegistrationError(error);
    }

    if (data?.user) {
      userUpdater(data.user);
      console.log("user received token is ", data.token)
      ApiClient.setToken(data.token);
      loginHandler();
      navigate("/");
    }
  };

  return (
    <div>
      <div className="split left">
        <form className="centered" onSubmit={handleLogin}>
          <div className="login-prompt">
            <p>Login</p> <br></br>
          </div>
          {/* <div className="login-inputs"> */}
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="Email"
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              placeholder="Password"
            />
            <button type="submit">Login</button>
          {/* </div> */}
        </form>
      </div>
      <div className="split right">
        <div className="centered">
          <img src="https://www.careerguide.com/career/wp-content/uploads/2021/05/ee84e6c4f71311cac5b0624e31ea9b51.gif" alt="audiologist-waving"/>
          <p>Welcome Back</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
