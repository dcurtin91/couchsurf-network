import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore";
import Register from "./Register";
import Card from "react-bootstrap/Card";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [showRegister, setShowRegister] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowRegister(true);
    setShowCard(false);
  };


  // useEffect(() => {
  //   if (user) {
  //     const checkUserDocs = async () => {
  //       const querySnapshot = await getDocs(collection(db, "properties"));
  //       if (!querySnapshot.empty) {
  //         navigate("/member-portal/directory");
  //       } else {
  //         navigate("/member-portal/signupform");
  //       }
  //     };

  //     checkUserDocs();
  //   }
  // }, [user, loading, navigate]);

  const loginButton = async (e) => {
    e.preventDefault();
    try{
    logInWithEmailAndPassword(email, password).then(() => {
      const event = new CustomEvent("loginSuccess");
      window.dispatchEvent(event);
      setTimeout(() => {
        navigate("/member-portal/directory");
      }, 100);
    });
  } catch (error) {
    console.error("login problem", error);
  }  
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      logInWithEmailAndPassword(email, password);
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
          to="/member-portal/reset"
          tabIndex={-1}
        >
          Forgot Password
        </Link>
      </div>
      <div>
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {e.preventDefault(); handleClick();}}
        >
          Register
        </a>{" "}
        now.

      </div>
    </Card>}
    {showRegister && <Register />}
    </>
  );
}

export default Login;
