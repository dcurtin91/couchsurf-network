import React, { useEffect, useState, ChangeEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import PhotoUpload from "./PhotoUpload";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Dashboard: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
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
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setter(event.target.value);
  };

  const handleEditToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter(true);
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/member-portal/");
    fetchUserData();
  }, [user, loading]);

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
          marginRight: "20px",
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
                backgroundColor: "lightsteelblue",
                width: "100%",
                marginTop: "0px",
                textAlign: "center",
                marginBottom: 0,
              }}
            >
              Your Property Address and Contact Info
            </Card.Header>

            <div className="dash_item">
              {isEditing ? (
                <input
                  type="text"
                  value={address}
                  onChange={handleInputChange(setAddress)}
                />
              ) : (
                <>
                  {address}{" "}
                  
                </>
              )}
            </div>
            <div className="dash_item">
              {isEditing ? (
                <input
                  type="text"
                  value={city}
                  onChange={handleInputChange(setCity)}
                />
              ) : (
                <>
                  {city}{" "}
                  
                </>
              )}
            </div>
            <div className="dash_item">
              {isEditing ? (
                <input
                  type="text"
                  value={territory}
                  onChange={handleInputChange(setTerritory)}
                />
              ) : (
                <>
                  {territory}{" "}
                 
                </>
              )}
            </div>
            <div className="dash_item">
              {isEditing ? (
                <input type="text" value={name} onChange={handleInputChange(setName)} />
              ) : (
                <>
                  {name}{" "}
                  
                </>
              )}
            </div>
            <div className="dash_item">
              {isEditing ? (
                <input type="text" value={email} onChange={handleInputChange(setEmail)} />
              ) : (
                <>
                  {email}{" "}
                  
                </>
              )}
            </div>
            <div className="dash_item">
              {isEditing ? (
                <input type="tel" value={phone} onChange={handleInputChange(setPhone)} />
              ) : (
                <>
                  {phone}{" "}
                  
                </>
              )}
            </div>
            <div className="dash_item">
              Vacancy:{" "}
              {isEditing ? (
                <select value={vacancy} onChange={handleInputChange(setVacancy)}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              ) : (
                <>
                  {vacancy}{" "}
                  
                </>
              )}
            </div>

            <div className="dash_item">
              Capacity:{" "}
              {isEditing ? (
                <input
                  type="number"
                  value={availability}
                  onChange={handleInputChange(setAvailability)}
                  min={0}
                  max={10}
                />
              ) : (
                <>
                  {availability}{" "}
                </>
              )}
            </div>

            <button
              style={{
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                marginLeft: "112px",
              }}
              onClick={handleEditToggle(setIsEditing)}
            >
              Edit
            </button>

            <button
              style={{
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                marginLeft: "112px",
              }}
              onClick={handleUpdate}
            >
              Update
            </button>
          </Col>
        </Row>
      </Card>
      {/* <Card
        style={{
          border: "1px solid black",
          backgroundColor: "lightgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "lightsteelblue",
            width: "100%",
            marginTop: "0px",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          Property Photo
        </Card.Header>
        <PhotoUpload />
      </Card> */}
    </div>
  );
};

export default Dashboard;
