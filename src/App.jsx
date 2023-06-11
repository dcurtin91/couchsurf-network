import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Building1 from "./Building1";
import { SignUpForm } from "./signUpForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/signupform" element={<SignUpForm />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/building1" element={<Building1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
