import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
//import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Directory from "./Directory";
import SignUpForm from "./SignUpForm";
import Navigation from "./Navbar";
import PublicDirectory from "./PublicDirectory";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/member-portal/" element={<PublicDirectory />} />
          <Route path="/member-portal/login" element={<Login />} />
          {/* <Route path="/member-portal/register" element={<Register />} /> */}
          <Route path="/member-portal/reset" element={<Reset />} />
          <Route path="/member-portal/signupform" element={<SignUpForm />} />
          <Route path="/member-portal/dashboard" element={<Dashboard />} />
          <Route path="/member-portal/directory" element={<Directory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
