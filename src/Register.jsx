import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    
} from "./firebase";


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
        }

    return (
        <div className="register">
            <div className="register__container">
                {/* <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    onKeyDown={handleKeyPress}
                /> */}
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    onKeyDown={handleKeyPress}
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    onKeyDown={handleKeyPress}
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                

                <div>
                    Already have an account? <Link to="/member-portal/">Login</Link> now.
                </div>
            </div>
        </div>
    );
}

export default Register;
