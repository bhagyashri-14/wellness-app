import React, { useState } from "react";
import "./LoginRegister.css";

export default function LoginRegister({
  onLogin,
  error,
  showRegister = false,
  onRegister,
  onToggleRegister,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (showRegister) {
      onRegister(username, password);
    } else {
      onLogin(username, password);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div className="login-page-outer">
      <div className="login-container">
        <div className="login-logo">🧘‍♀️</div>
        <h1>Wellness Session Manager</h1>
        <h2>{showRegister ? "Register a new account" : "Sign in to your account"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            {showRegister ? "Choose a username" : "Username"}
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password">
            {showRegister ? "Choose a password" : "Password"}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete={showRegister ? "new-password" : "current-password"}
            placeholder={showRegister ? "Set your password" : "Enter your password"}
            required
          />
          <button type="submit">{showRegister ? "Register" : "Login"}</button>
        </form>
        <button
          className="register-link"
          type="button"
          onClick={onToggleRegister}
        >
          {showRegister ? "Already have an account?" : "Need an account?"}
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}