import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendMessage } from "./Firebase";
import { PatternFormat } from "react-number-format";
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(
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
  
      const event = new CustomEvent("formSuccess");
      window.dispatchEvent(event);
  
     
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
    } catch (error) {
      console.error("Error sending message:", error);
     
    }
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
                name="territory"
                value={formData.territory}
                onChange={handleChange}
                className="login__textBox"
                required
              >
                <option value="" disabled>Select your state</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland<">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi<">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island<">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washingto">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming<">Wyoming</option>
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
              <PatternFormat
                style={{ marginTop: "15px" }}
                type="tel"
                name="phone"
                format="(###) ###-####" 
                mask="_"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                className="login__textBox"
                minLength={1}
                required
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
                disabled={formData.name.length < 1}
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

export default SignUpForm;
