import { Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { auth, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

export default function Navigation() {
  const [user] = useAuthState(auth);

  
  return (
   
      <Navbar>
        {!user && (
          
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img src="src/0000.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/member-portal/login">Sign In</Dropdown.Item>
              <Dropdown.Item href="/member-portal/register">Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        
        )}
        {user && (
          
            <Dropdown class="my-2 my-sm-0">
            <Dropdown.Toggle id="dropdown-basic" class="my-2 my-sm-0">
              <img src="src/0000.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu class="my-2 my-sm-0">
              <Dropdown.Item href="/member-portal/dashboard">Profile</Dropdown.Item>
              <Dropdown.Item href="/member-portal/directory">Directory</Dropdown.Item>
              <Dropdown.Item href="/member-portal/login" onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        
        )}
      </Navbar>
  
  );
}
