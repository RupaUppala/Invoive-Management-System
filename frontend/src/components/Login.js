import API from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    await API.post("/auth/login", { email, password });
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email Address"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <div className="login-footer">
          Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </div>
      </div>
    </div>
  );
}
