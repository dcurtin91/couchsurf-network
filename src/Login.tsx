import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  

  useEffect(() => {
    if (user) {
      const checkUserDocs = async () => {
        const querySnapshot = await getDocs(collection(db, "properties"));
        if (!querySnapshot.empty) {
          navigate("/member-portal/directory");
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
    
    <div style={{
          textAlign: "center"
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
              onClick={() => logInWithEmailAndPassword(email, password)}
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
              <Link
                to="/member-portal/register"
                tabIndex={-1}
              >
                Register
              </Link>{" "}
              now.
            
      </div>
    </div>
    
  );
}

export default Login;