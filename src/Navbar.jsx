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
        <Navbar.Brand href="/member-portal/"><img 
        src="src/DALL·E 2024-08-25 17.11.33 - A minimalist logo for 'Couch Surf' featuring a cozy, stylized couch with elements of a surfboard incorporated. The couch has a subtle wave pattern on .webp"
        style={{
          height: "55px",
          width: "65px",
          borderRadius: "25px",
          marginTop: "10px"
        }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <Dropdown className="custom-dropdown p-3" align="end"  style={{
              backgroundColor: "white",
              borderRadius: "12px",
              height: "60px",
              width: "60px",
           
            }}>
              <Dropdown.Toggle style={{
              backgroundColor: "white",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0"
            }}>
                <img style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  
                }} src="src/0000.png" alt="User Icon"/>
              </Dropdown.Toggle>

              <Dropdown.Menu 
              className="shadow p-3"
              style={{
                textAlign: "center",
                
              }}>
                <Dropdown.Item href="/member-portal/login">Sign In</Dropdown.Item>
                <Dropdown.Item href="/member-portal/register">Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {user && (
            <Dropdown className="custom-dropdown p-3" align="end"  style={{
              backgroundColor: "white",
              borderRadius: "12px",
              height: "60px",
              width: "60px",
           
            }}>
              <Dropdown.Toggle style={{
              backgroundColor: "white",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0"
            }}>
                <img style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px"
                }} src="src/0000.png" alt="User Icon"/>
              </Dropdown.Toggle>

              <Dropdown.Menu 
              className="shadow p-3"
              style={{
                textAlign: "center"
              }}>
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
