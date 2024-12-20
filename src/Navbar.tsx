import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import image from "./home_icon.webp";
import image2 from "./0000.png"
import { auth, logout } from "./Firebase.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './Login';
import Register from './Register';
import "./App.css";

function Navigation() {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const isActive = (href: string) => {
    return href === currentPage ? 'is-active' : '';
  };

  useEffect(() => {
    setLoggedIn(!!user); // Set to true if user exists, otherwise false
  }, [user]);

  // useEffect(() => {
  //   if (!loggedIn && window.location.pathname === "/directory") {
  //     navigate("/"); 
  //   }
  // }, [loggedIn, location.pathname, navigate]);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/"><img
            src={image}
            alt="home icon"
            style={{
              height: "55px",
              width: "65px",
              borderRadius: "25px",
              marginTop: "10px"
            }} /></Navbar.Brand>



          {!loggedIn && (
            <Dropdown className="custom-dropdown p-3" align="end" style={{
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
                <img className="user-icon" style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",

                }} src={image2} alt="User Icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="shadow p-3"
                style={{
                  textAlign: "center",

                }}>
                <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); handleShow(); }}>Sign In</Dropdown.Item>
                <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); handleShowRegister(); }}>Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {loggedIn && (
            <Dropdown className="custom-dropdown p-3" align="end" style={{
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
                }} src={image2} alt="User Icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="shadow p-3"
                style={{
                  textAlign: "center"
                }}>
                <Dropdown.Item href="/dashboard" className={`${isActive("/dashboard")}`}>Profile</Dropdown.Item>
                <Dropdown.Item href="/" className={`${isActive("/")}`}>Directory</Dropdown.Item>
                <Dropdown.Item href="/" onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

        </Container>
      </Navbar>



      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Login />

        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showRegister} onHide={handleCloseRegister} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Register />

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
