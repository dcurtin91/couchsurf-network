import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import { auth, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

export default function Navigation() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <Dropdown align="end"  style={{
              backgroundColor: "white",
              
            }}>
              <Dropdown.Toggle style={{
              backgroundColor: "white",
              border: "none"
            }}>
                <img style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px"
                }} src="src/0000.png" alt="User Icon"/>
              </Dropdown.Toggle>

              <Dropdown.Menu 
             
              style={{
                textAlign: "center",
                
              }}>
                <Dropdown.Item href="/member-portal/login">Sign In</Dropdown.Item>
                <Dropdown.Item href="/member-portal/register">Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {user && (
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img src="src/0000.png" alt="User Icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/member-portal/dashboard">Profile</Dropdown.Item>
                <Dropdown.Item href="/member-portal/directory">Directory</Dropdown.Item>
                <Dropdown.Item href="/member-portal/login" onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
