import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "./Firebase.jsx";
import Register from "./Register";
import Card from "react-bootstrap/Card";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, loading] = useAuthState(auth);
  const [showRegister, setShowRegister] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowRegister(true);
    setShowCard(false);
  };



  const loginButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await logInWithEmailAndPassword(email, password);
      setShowCard(false);
      navigate("/directory");
    } catch (error) {
      console.error("login problem", error);
      alert("Failed to log in. Please check your email and password.");
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        await logInWithEmailAndPassword(email, password);
        navigate("/directory");
      } catch (error) {
        console.error("login problem", error);
        alert("Failed to log in. Please check your email and password.");
      }
    }
  };

  return (
    <>
      {showCard && <Card style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#fafaf5"
      }}>
        <div>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            onKeyDown={handleKeyPress}

          />
        </div>
        <div>
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <button
            style={{
              borderRadius: "8px",
              width: "120px",
              marginBottom: "12px"
            }}
            onClick={loginButton}
          >
            Log In
          </button>
        </div>

        <div style={{
          marginBottom: "12px"
        }}>
          <Link
            to="/reset/"
            tabIndex={-1}
          >
            Forgot Password
          </Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to="#"
            onClick={(e) => { e.preventDefault(); handleClick(); }}
          >
            Register
          </Link>{" "}
          now.

        </div>
      </Card>}
      {showRegister && <Register />}
    </>
  );
}

export default Login;
