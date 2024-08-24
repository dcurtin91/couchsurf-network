import { Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { auth, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

export default function Navigation() {
  const location = useLocation();
  const [user] = useAuthState(auth);

  const isActive = (path) => {
    return location.pathname === path ? "activeLink" : "";
  };

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "white",
          color: "white",
          fontWeight: "bold",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!user && (
          <div style={{ marginLeft: "2rem" }}>
            <Link
              to="/member-portal/login"
              className={`navOption ${isActive("/member-portal/directory")}`}
            >
              Sign In
            </Link>
          </div>
        )}
        {user && (
          <div style={{ marginLeft: "2rem" }}>
            <Link
              to="/member-portal/directory"
              className={`navOption ${isActive("/member-portal/directory")}`}
            >
              Directory
            </Link>
          </div>
        )}
        {user && (
          <div style={{ marginLeft: "60rem" }}>
            <Link
              to="/member-portal/dashboard"
              className={`navOption ${isActive("/member-portal/dashboard")}`}
            >
              Dashboard
            </Link>
          </div>
        )}
        {user && (
          <div style={{ marginRight: "2rem" }}>
            <Link to="/member-portal/login" className="navOption" onClick={logout}>
              Log Out
            </Link>
          </div>
        )}
      </Navbar>
    </div>
  );
}
