import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./firebase";
import Card from "react-bootstrap/Card";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    // if (!name) alert("Please enter name");
    registerWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/member-portal/signupform");
  }, [user, loading]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      register(email, password);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          border: "1px solid black",
          backgroundColor: "lightgrey",
        }}
      >
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          onKeyDown={handleKeyPress}
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          onKeyDown={handleKeyPress}
        />
        <button className="login__btn" onClick={register}>
          Register
        </button>

        <div>
          Already have an account? <Link to="/member-portal/">Login</Link> now.
        </div>
      </Card>
    </div>
  );
}

export default Register;
