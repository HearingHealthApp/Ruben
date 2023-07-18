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
      setRegistrationError(error);
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
      <h1>Register</h1>

      <form onSubmit={handleRegistration}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password: </label>
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
          .
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
