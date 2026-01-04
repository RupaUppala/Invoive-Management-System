import API from "../services/api";
import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({});

  const signup = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    await API.post("/auth/signup", form);
    alert("Signup successful");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={signup}>Sign Up</button>

        <div className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
