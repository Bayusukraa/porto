import React, { useState } from "react";
import Portfolio from "./Portfolio";
import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // STATE LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin@gmail.com";
    const validPass = "123456";

    if (email === validEmail && password === validPass) {
      window.location.href = "/album.html";
    } else {
      setError("Email atau password salah!");
    }
  };

  // Jika tombol Album ditekan → tampilkan login
  if (showLogin) {
    return (
      <div style={{ width: "300px", margin: "90px auto", textAlign: "center" }}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" style={{ width: "100%", padding: 10 }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  // Halaman utama tanpa login awal
  return <Portfolio openLogin={() => setShowLogin(true)} />;
}

export default App;
