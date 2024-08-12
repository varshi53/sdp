
// import React, { useState } from "react";
// import "../login/login.css";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// export const Login = (props) => {
//   console.log("Login component is rendering");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(email);
//     try {
//       const response = await axios.post("http://localhost:8080/api/log", {
//         email,
//         password: pass,
//       });
//       console.log(response.data);
//       if (response.data.email === "727822tuio061@skct.edu.in") {
//         history.push("/home");
//       } else if (response.data.email === "admin@example.com") {
//         history.push("/admin");
//       } else if (response.data.email === "varshu@gmail.com") {
//         history.push("/staff");
//       } else {
//         alert("Invalid email or password");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="heading">Welcome to Melodia!</h1>
//       <div className="login-form-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="youremail@gmail.com"
//             id="email"
//             name="email"
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             placeholder="****"
//             id="password"
//             name="password"
//           />
//           <button type="submit">Log In</button>
//         </form>
//         <button
//           className="login-link-btn"
//           onClick={() => history.push("/register")}
//         >
//           Don't have an account? Register here.
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "../login/login.css";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo purposes
    const validUsers = {
      "727822tuio061@skct.edu.in": "/home",
      "admin@example.com": "/admin",
      "varshu@gmail.com": "/staff",
    };

    if (validUsers[email] && pass === "123") { // Assuming 'password123' is the hardcoded password
      history.push(validUsers[email]);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1 className="heading">Welcome to Melodia!</h1>
      <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Log In</button>
        </form>
        <button
          className="login-link-btn"
          onClick={() => history.push("/register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;

