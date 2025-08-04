import React, { useState } from "react";
import LoginRegister from "./components/LoginRegister";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  // This is your handleLogin function
  function handleLogin(username, password) {
    // Replace this logic with your real authentication or backend call
    if (username === "bhagyashri" && password === "12345") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  }

  function handleToggleRegister() {
    setShowRegister((prev) => !prev);
    setLoginError("");
  }

  function handleRegister(username, password) {
    // Registration logic here (optional)
    alert(`Registered as ${username}`);
    setShowRegister(false);
    setLoginError("");
  }

  return (
    <div>
      {!isLoggedIn ? (
        <LoginRegister
          onLogin={handleLogin}
          error={loginError}
          showRegister={showRegister}
          onRegister={handleRegister}
          onToggleRegister={handleToggleRegister}
        />
      ) : (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h1>Welcome, {`bhagyashri`}!</h1>
          <p>You are now logged in.</p>
        </div>
      )}
    </div>
  );
}

export default App;