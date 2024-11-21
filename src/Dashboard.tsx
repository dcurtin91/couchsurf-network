import React, { useEffect, useState, ChangeEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase.jsx";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Pencil } from 'lucide-react';
import PhotoUpload from "./PhotoUpload.jsx";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";



const Dashboard: React.FC = () => {
  const [user, loading ] = useAuthState(auth);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>(" ");
  const [city, setCity] = useState<string>(" ");
  const [territory, setTerritory] = useState<string>(" ");
  const [phone, setPhone] = useState<string>(" ");
  const [vacancy, setVacancy] = useState<string>(" ");
  const [availability, setAvailability] = useState<string>(" ");

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

  const enableButton = () => {
    setButtonEnabled(true);
  }

  const fetchUserData = async () => {
    try {
      if (user) {
        const docId = user.uid;
        const docRef = await getDoc(doc(db, "properties", docId));

        if (docRef.exists()) {
          const data = docRef.data();
          if (data) {
            setAddress(data.address || "");
            setCity(data.city || "");
            setTerritory(data.territory || "");
            setName(data.name || "");
            setEmail(data.email || "");
            setPhone(data.phone || "");
            setVacancy(data.vacancy || "");
            setAvailability(data.availability || "");
          }
        } else {
          console.log("User data not found.");
        }
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setter((event.target as HTMLInputElement).value);
  };

  const handleVacancyInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setter(event.target.value);
  };

  const handleEditToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter(true);
    enableButton();
  };

 

  const handleUpdate = async () => {
    try {
      if (user) {
        const docId = user.uid;
        const docRef = doc(db, "properties", docId);

        await updateDoc(docRef, {
          address,
          city,
          territory,
          name,
          email,
          phone,
          vacancy,
          availability,
        });

        const updatedDoc = await getDoc(docRef);
        const updatedData = updatedDoc.data();
        if (updatedData) {
          setAddress(updatedData.address || "");
          setCity(updatedData.city || "");
          setTerritory(updatedData.territory || "");
          setName(updatedData.name || "");
          setEmail(updatedData.email || "");
          setPhone(updatedData.phone || "");
          setVacancy(updatedData.vacancy || "");
          setAvailability(updatedData.availability || "");
        }


        setIsEditing(false);
        navigate(0);

      }
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserData();
  }, [user, loading]);

  return (
    <Container>
      <h3 style={{

        textAlign: "center",
        marginBottom: "10px"
      }}
      >Visit the <a href="/directory">Directory</a> to See Your Listing</h3>
      <Row>
        <Col>
          <Card
            style={{ padding: "40px", backgroundColor: "#fafaf5" }}
          >
            <Card.Header style={{
              textAlign: "center",
              borderRadius: "10px",
              marginBottom: "10px"
            }}>Your Location Address and Contact Info</Card.Header>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "flex-end",

              }}>
              <Pencil
                onClick={handleEditToggle(setIsEditing)}
                style={{ cursor: "pointer" }}
              />
            </Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label style={{
                  marginBottom: "-30px",
                  fontSize: "14px",
                  marginLeft: "5px"
                }}>Address</Form.Label>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={handleInputChange(setAddress)}
                  />
                ) : (
                  <Form.Control
                    value={address}
                    readOnly
                    disabled
                  />
                )}
              </Form.Group>

              <Row className="mb-3">

                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>City</Form.Label>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={handleInputChange(setCity)}
                    />
                  ) : (
                    <Form.Control
                      value={city}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>


                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>State</Form.Label>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={territory}
                      onChange={handleInputChange(setTerritory)}
                    />
                  ) : (
                    <Form.Control
                      value={territory}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>

              </Row>


              <Form.Group className="mb-3">
                <Form.Label style={{
                  marginBottom: "-30px",
                  fontSize: "14px",
                  marginLeft: "5px"
                }}>Preferred Name</Form.Label>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleInputChange(setName)}
                  />
                ) : (
                  <Form.Control
                    value={name}
                    readOnly
                    disabled
                  />
                )}
              </Form.Group>


              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>Email</Form.Label>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={handleInputChange(setEmail)}
                    />
                  ) : (
                    <Form.Control
                      value={email}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>Phone</Form.Label>
                  {isEditing ? (
                    <Form.Control
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={handleInputChange(setPhone)}
                    />
                  ) : (
                    <Form.Control
                      value={phone}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>Vacancy</Form.Label>
                  {isEditing ? (
                    <Form.Select value={vacancy} onChange={handleVacancyInputChange(setVacancy)}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  ) : (
                    <Form.Control
                      value={vacancy}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label style={{
                    marginBottom: "-30px",
                    fontSize: "14px",
                    marginLeft: "5px"
                  }}>Capacity</Form.Label>
                  {isEditing ? (
                    <Form.Control
                      type="number"
                      value={availability}
                      onChange={handleInputChange(setAvailability)}
                      min={0}
                      max={10}
                    />
                  ) : (
                    <Form.Control
                      value={availability}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>
              </Row>
            </Form>
            <Row className="mb-3 justify-content-center">
              <Col></Col>
              <Col>
                <button
                  style={buttonEnabled ?
                    styles.enabledButton : styles.disabledButton}
                  onClick={handleUpdate}
                  disabled={!buttonEnabled}
                >
                  Update
                </button>
              </Col>
              <Col></Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              textAlign: "center",
              padding: "40px",
              backgroundColor: "#fafaf5"
            }}
          >
            <Card.Header style={{
              borderRadius: "10px",
              marginBottom: "10px"
            }}>Upload a Photo of Your Space</Card.Header>
            <PhotoUpload />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

const styles = {
  enabledButton: {
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    width: "90px",
    marginLeft: "28px"
  },
  disabledButton: {
    display: "none"
  }
}