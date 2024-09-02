import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./Firebase";
import SignUpForm from "./SignUpForm";
import Login from "./Login";
import Card from "react-bootstrap/Card";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading] = useAuthState(auth);
  const [showLogin, setShowLogin] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [showForm, setShowForm] = useState(false);
  //const navigate = useNavigate();

  const handleClick = () => {
    setShowLogin(true);
    setShowCard(false);
  };
  

  // const registration = () => {
  //   registerWithEmailAndPassword(email, password).then(() => {
  //     const event = new CustomEvent("registerSuccess");
  //     window.dispatchEvent(event); 
  //   });
  // };

  const registration = () => {
    registerWithEmailAndPassword(email, password);
    setShowCard(false);
    setShowForm(true);
  };

  // useEffect(() => {
  //   if (loading) return;
  // }, [loading]);

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/member-portal/signupform");
  // }, [user, loading, navigate]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      registration();
    }
  };

  return (
    <>
      {showCard && (
        <Card style={{ textAlign: "center", padding: "40px", backgroundColor: "#fafaf5" }}>
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
                marginBottom: "12px",
              }}
              onClick={registration}
            >
              Register
            </button>
          </div>

          <div>
            Already have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>
              Log in
            </a>{" "}
            now.
          </div>
        </Card>
      )}
      {showLogin && <Login />}
      {showForm && <SignUpForm />}
    </>
  );
};

export default Register;
