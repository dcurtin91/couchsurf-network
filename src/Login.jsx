import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1IqrdEPTT1ZoeKikj2jm04xUteoGHxlk",
    authDomain: "member-portal-8a367.firebaseapp.com",
    projectId: "member-portal-8a367",
    storageBucket: "member-portal-8a367.appspot.com",
    messagingSenderId: "389153166875",
    appId: "1:389153166875:web:a2cde7e4ae132942d74abe",
    measurementId: "G-4ZCLBGQ773"
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
                const collectionName = `${user.uid}`;
                const querySnapshot = await getDocs(collection(db, collectionName));
                if (!querySnapshot.empty) {
                    navigate("/dashboard");
                }
                else {
                    navigate("/signupform");
                }
            };

            checkUserDocs();
        }
    }, [user, loading, navigate]);

    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}

export default Login;
