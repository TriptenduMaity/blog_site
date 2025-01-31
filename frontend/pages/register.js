import { useState } from "react";
import axios from "axios";
import './login.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { username, email, password });
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
