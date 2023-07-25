import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ApiClient from "../../services/apiClient.JS";
import "./RegisterPage.css";

const RegisterPage = ({ loginHandler, userUpdater }) => {
  //useState variables for the individual input types
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [age, setAge] = useState(null)

  //navigation for redirecting once registration
  let navigate = useNavigate();

  const [registrationError, setRegistrationError] = useState(null);


  //submit handler for the form
  const handleRegistration = async (e) => {
    e.preventDefault();

    const registrationInfo = JSON.stringify({
      email,
      firstName,
      lastName,
      username,
      password,
    });

    const { data, error } = await ApiClient.registerUser(registrationInfo);

    if (error) {
      setRegistrationError(error)
    }

    if (data?.user) {
      userUpdater(data.user);
      ApiClient.setToken(data.token);
      loginHandler();
      navigate("/");
    }
  };

  return (
    <div>
      <div className="screen-split">
        <div className="left-side">
            <section className="copy-reg">
              <h1 className="header-reg">Enjoy our services without cost</h1>
              <p>Licensed professionals are here for all you hearing needs</p>
            </section>
        </div>
      <div className="right-side">
      <form onSubmit={handleRegistration}>
        <section className="copy">
                <h2 className="register-header">Sign In</h2>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"
                  alt="login icon"
                />
                <div className="login-container"></div>
        </section>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>

        <p>
          Are you a doctor?{" "}
          <Link to="/register/doctor">
           Register <span>here</span>
          </Link>
          
        </p>
        <p>{registrationError}</p>
      </form>
      </div>
    </div>
  </div>
  );
};

export default RegisterPage;
