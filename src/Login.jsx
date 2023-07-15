import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Card from "react-bootstrap/Card";

const firebaseConfig = {
  apiKey: "AIzaSyC1IqrdEPTT1ZoeKikj2jm04xUteoGHxlk",
  authDomain: "member-portal-8a367.firebaseapp.com",
  projectId: "member-portal-8a367",
  storageBucket: "member-portal-8a367.appspot.com",
  messagingSenderId: "389153166875",
  appId: "1:389153166875:web:a2cde7e4ae132942d74abe",
  measurementId: "G-4ZCLBGQ773",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const checkUserDocs = async () => {
        //const collectionName = `${user.uid}`;
        const querySnapshot = await getDocs(collection(db, "properties"));
        if (!querySnapshot.empty) {
          navigate("/member-portal/dashboard");
        } else {
          navigate("/member-portal/signupform");
        }
      };

      checkUserDocs();
    }
  }, [user, loading, navigate]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      logInWithEmailAndPassword(email, password);
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
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>

        <div>
          <Link to="/member-portal/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to="/member-portal/register">Register</Link> now.
        </div>
      </Card>
    </div>
  );
}

export default Login;
