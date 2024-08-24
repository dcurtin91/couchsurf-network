import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendMessage } from "./Firebase";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignUpForm() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    territory: "",
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
      formData.city,
      formData.territory,
      formData.name,
      formData.email,
      formData.phone,
      formData.vacancy,
      formData.availability
    );
    setFormData({
      address: "",
      city: "",
      territory: "",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "white",
                width: "100%",
                marginTop: "0px",
                textAlign: "center",
                marginBottom: 0,
              }}
            >
              Sign Up as a Host
            </Card.Header>
            <form onSubmit={handleSubmit} style={{ padding: "2em" }}>
              <input
                type="text"
                name="address"
                placeholder="property address"
                value={formData.address}
                onChange={handleChange}
                className="login__textBox"
                required
                minLength={1}
              />
              <input
                type="text"
                name="city"
                placeholder="city"
                value={formData.city}
                onChange={handleChange}
                className="login__textBox"
                required
                minLength={1}
              />
              <select
  name="state"
  value={formData.territory}
  onChange={handleChange}
  className="login__textBox"
  required
>
  <option value="" disabled>Select your state</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
</select>

              <input
                style={{ marginTop: "15px" }}
                type="text"
                name="name"
                placeholder="contact first and last name"
                value={formData.name}
                onChange={handleChange}
                className="login__textBox"
                required
                minLength={1}
              />
              <input
                style={{ marginTop: "15px" }}
                type="email"
                name="email"
                placeholder="contact email"
                value={formData.email}
                onChange={handleChange}
                className="login__textBox"
                required
                minLength={1}
              />
              <input
                style={{ marginTop: "15px" }}
                type="tel"
                name="phone"
                placeholder="contact phone"
                value={formData.phone}
                onChange={handleChange}
                className="login__textBox"
                minLength={1}
              />
              <label style={{ marginTop: "15px", fontSize: "13px" }}>
                <input
                  type="checkbox"
                  name="vacancy"
                  checked={formData.vacancy}
                  onChange={handleChange}
                  placeholder="number of rooms available"
                />{" "}
                Vacancy?
              </label>
              <br></br>
              <div style={{ marginTop: "15px", fontSize: "13px" }}>
                {" "}
                Capacity{" "}
              </div>
              <input
                style={{ marginTop: "5px", fontSize: "13px" }}
                type="number"
                name="availability"
                placeholder="1"
                value={formData.availability}
                onChange={handleChange}
                min={0}
                max={10}
              />

              <br></br>
              <br></br>
              <button
                type="submit"
                disabled={formData.name < 1}
                style={{
                  borderRadius: "8px",
                  marginLeft: "94px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export { SignUpForm };
