import React, { useState, useEffect } from "react";
import { getMessages, storage } from "./Firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const PublicDirectory = () => {
  const [messages, setMessages] = useState([]);
  const [imageUrlsMap, setImageUrlsMap] = useState({});
  const [city, setCity] = useState("");
  const [territory, setTerritory] = useState("");
  const [user, loading] = useAuthState(auth);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      const checkUserDocs = async () => {
        const querySnapshot = await getDocs(collection(db, "properties"));
        if (!querySnapshot.empty) {
          navigate("/member-portal/directory");
        } else {
          navigate("/member-portal/");
        }
      };

      checkUserDocs();
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const unsubscribe = getMessages((newMessages) => {
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let isMounted = true; 
    const accumulatedUrls = {};

    Promise.all(
      messages.map((message) => {
        const imagesListRef = ref(storage, `${message.uid}`);
        return listAll(imagesListRef).then((response) => {
          return Promise.all(
            response.items.map((item) => getDownloadURL(item))
          ).then((urls) => {
            accumulatedUrls[message.uid] = urls; 
          });
        });
      })
    ).then(() => {
      if (isMounted) {
        setImageUrlsMap(accumulatedUrls);
      }
    });

   
    return () => {
      isMounted = false; 
    };
  }, [messages]);

useEffect(() => {
  setFilteredMessages(
    messages.filter((message) => {
      return (
        (city === "" || message.city.toLowerCase().includes(city.toLowerCase())) &&
        (territory === "" || message.territory.toLowerCase().includes(territory.toLowerCase()))
      );
    })
  );
}, [city, territory, messages]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form inline style={{ margin: "20px 0"  }}>
        <Form.Control
          type="text"
          placeholder="Search by City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ marginRight: "10px"  }}
        />
        <Form.Control
          type="text"
          placeholder="Search by State"
          value={territory}
          onChange={((e) => setTerritory(e.target.value))}
          style={{ marginRight: "10px" }}
        />
        <Button variant="primary" onClick={() => setFilteredMessages(messages)}>
          Reset
        </Button>
      </Form>
      {filteredMessages.map(
        (message, index) =>
          index % 3 === 0 && (
            <Row key={index}>
              {filteredMessages.slice(index, index + 3).map((message, subIndex) => (
                <Col key={subIndex}>
                  <Card
                    style={{
                      border: "1px solid black",
                      backgroundColor: "lightgrey",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Card.Body
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                        lineHeight: "4px",
                      }}
                    >
                      <Card.Text>City: {message.city}</Card.Text>
                      
                      <Card.Text>State: {message.territory}</Card.Text>
                      
                      <Card.Text>Vacancy: {message.vacancy}</Card.Text>

                      <Card.Text>Capacity: {message.availability}</Card.Text>

                      
                      {imageUrlsMap[message.uid] &&
                        imageUrlsMap[message.uid].map((url, index) => (
                          <img
                            style={{
                              border: "1px solid black",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            key={index}
                            src={url}
                            alt="Uploaded"
                          />
                        ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )
      )}
    </div>
  );
};

export default PublicDirectory;
