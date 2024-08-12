
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../register/register.css";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!name || !email || !pass || !confirmPass) {
      setError("Please fill in all fields");
      return;
    } else if (pass !== confirmPass) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/reg", {
        name: name,
        email: email,
        password: pass,
        confirmPassword: confirmPass,
      });

      if (response.status === 200) {
        // Registration successful
        history.push("/home");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message);
      } else if (error.request) {
        // Request was made but no response received
        setError("Network error. Please try again.");
      } else {
        // Something else happened while setting up the request
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <h1 className="heading">Register</h1>
      {error && <p className="error">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          placeholder="****"
          id="confirmPassword"
          name="confirmPassword"
        />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Register;
