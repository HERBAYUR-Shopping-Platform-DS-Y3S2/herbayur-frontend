import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";


const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");

  const handleUsernameChange = (event) => {
    setuserName(event.target.value);
    // console.log(userName);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    //    console.log(password);
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    if (userName == 'user123' && password == 'user'){
        alert('User login success');
        window.location.href='/homepage'
    }
     if (userName == "admin123" && password == "admin") {
       alert("Login as Admin");
       window.location.href = "/";
     }
     if (userName == "seller123" && password == "seller") {
       alert("Login as Seller");
       window.location.href = "/";
     }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUsernameChange}
            style={{ width: "100%" }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", marginBottom: "1rem" }}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        <p>Or login with:</p>
        <div>
          <a href="#" style={{ margin: "0.5rem" }}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" style={{ margin: "0.5rem" }}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
