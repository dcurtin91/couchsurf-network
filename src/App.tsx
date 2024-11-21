import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Directory from "./Directory";
import Navigation from "./Navbar";
import PublicDirectory from "./PublicDirectory";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicDirectory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
