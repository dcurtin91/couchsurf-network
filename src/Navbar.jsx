import { Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
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
          <div style={{ marginRight: "2rem" }}>
            {/* <Link
              to="/member-portal/login"
              className={`navOption ${isActive("/member-portal/directory")}`}
            >
              Sign In
            </Link> */}
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img src="src/0000.png" />
            </Dropdown.Toggle>

      <       Dropdown.Menu>
              <Dropdown.Item href="/member-portal/login">Sign In</Dropdown.Item>
              <Dropdown.Item href="/member-portal/register">Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        {user && (
          <div style={{ marginLeft: "2rem" }}>
            {/* <Link
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
            </Link> */}
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img src="src/0000.png" />
            </Dropdown.Toggle>

      <       Dropdown.Menu>
              <Dropdown.Item href="/member-portal/dashboard">Profile</Dropdown.Item>
              <Dropdown.Item href="/member-portal/directory">Directory</Dropdown.Item>
              <Dropdown.Item href="/member-portal/login" onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </Navbar>
    </div>
  );
}
