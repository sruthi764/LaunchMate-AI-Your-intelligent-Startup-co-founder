import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div className="login-container">
      <div className="login-box">

        <div className="title">LaunchMate AI</div>
        <div className="subtitle">Your Intelligent Startup Co-Founder</div>
        <img
          className="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
        />

        <h2>Login</h2>

        <label>Email</label>
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />   

        <label>Password</label>
        <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <p className="forgot">Forgot Password?</p>

        <button onClick={handleLogin}>
        Login
        </button>

        <div className="divider">OR</div>

        <p>Don't have an account?</p>

        <Link to="/signup">Sign Up</Link>

      </div>
    </div>
  );
}

export default Login;