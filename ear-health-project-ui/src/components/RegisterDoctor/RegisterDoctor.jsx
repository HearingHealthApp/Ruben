import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterDoctor = ({ loginHandler }) => {
  //useState variables for the individual input types
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  //navigation for redirecting once registration
  let navigate = useNavigate();

  //submit handler for the form
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email,
        firstName,
        lastName,
        username,
        registrationNumber,
        password,
      })
    );
    loginHandler();

    navigate("/");
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

        <label>Registration Number: </label>
        <input
          type="text"
          value={registrationNum}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <label>Username: </label>
        <input
          type="text"
          value={userName}
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
      </form>
    </div>
  );
};

export default RegisterDoctor;
