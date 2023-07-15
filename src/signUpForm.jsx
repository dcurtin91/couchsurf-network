import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendMessage } from "./firebase";
import Card from "react-bootstrap/Card";

function SignUpForm() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: "",
    vacancy: false,
    availability: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(
      user,
      formData.address,
      formData.name,
      formData.email,
      formData.phone,
      formData.vacancy,
      formData.availability
    );
    setFormData({
      address: "",
      name: "",
      email: "",
      phone: "",
      vacancy: false,
      availability: "",
    });
    navigate("/member-portal/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          border: "1px solid black",
          backgroundColor: "lightgrey",
        }}
      >
        <h2 style={{ marginRight: "11px" }}>Sign Up as a Host</h2>
        <form onSubmit={handleSubmit} className="message-input-container">
          <input
            style={{ marginLeft: "15px" }}
            type="text"
            name="address"
            placeholder="property address"
            value={formData.address}
            onChange={handleChange}
            className="login__textBox"
            required
            minLength={1}
          />
          <br></br>
          <br></br>
          <input
            style={{ marginLeft: "15px" }}
            type="text"
            name="name"
            placeholder="contact first and last name"
            value={formData.name}
            onChange={handleChange}
            className="login__textBox"
            required
            minLength={1}
          />
          <br></br>
          <br></br>
          <input
            style={{ marginLeft: "15px" }}
            type="email"
            name="email"
            placeholder="contact email"
            value={formData.email}
            onChange={handleChange}
            className="login__textBox"
            required
            minLength={1}
          />
          <br></br>
          <br></br>
          <input
            style={{ marginLeft: "15px" }}
            type="tel"
            name="phone"
            placeholder="contact phone"
            value={formData.phone}
            onChange={handleChange}
            className="login__textBox"
            minLength={1}
          />
          <br></br>
          <br></br>
          <label style={{ fontSize: "13px" }}>
            <input
              type="checkbox"
              name="vacancy"
              checked={formData.vacancy}
              onChange={handleChange}
              placeholder="number of rooms available"
            />
            Vacancy? *Enter capacity if checked*
          </label>
          <br></br>
          {formData.vacancy && (
            <input
              style={{ marginLeft: "15px" }}
              type="number"
              name="availability"
              placeholder="1"
              value={formData.availability}
              onChange={handleChange}
              className="login__textBox"
              min={0}
              max={10}
            />
          )}
          <br></br>
          <br></br>
          <button
            type="submit"
            disabled={formData.name < 1}
            className="send-message"
            style={{ marginLeft: "65px" }}
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export { SignUpForm };
