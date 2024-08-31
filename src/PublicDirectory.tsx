import React, { useState, useEffect } from "react";
import { getMessages, storage } from "./Firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import Login from "./Login";
import Register from "./Register";
import SignUpForm from "./SignUpForm";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";

interface Message {
  uid: string;
  city: string;
  territory: string;
  availability: number;
  vacancy: string;
}

interface ImageUrlsMap {
  [uid: string]: string[];
}

const PublicDirectory: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [imageUrlsMap, setImageUrlsMap] = useState<ImageUrlsMap>({});
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);



  useEffect(() => {
    const unsubscribe = getMessages((newMessages: Message[]) => {
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const accumulatedUrls: ImageUrlsMap = {};
    Promise.all(
      messages.map(async (message) => {
        const imagesListRef = ref(storage, `${message.uid}`);
        const response = await listAll(imagesListRef);
        const urls = await Promise.all(
          response.items.map((item) => getDownloadURL(item))
        );
        accumulatedUrls[message.uid] = urls;
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
        const combinedSearch = `${message.city} ${message.territory}`.toLowerCase();
        return combinedSearch.includes(searchInput.toLowerCase()) && message.vacancy === "Yes";
      })
    );
  }, [searchInput, messages]);

  
  useEffect(() => {
    const handleFormSuccess = () => {
      handleCloseRegister();
    };

    window.addEventListener("formSuccess", handleFormSuccess);

    return () => {
      window.removeEventListener("formSuccess", handleFormSuccess);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form style={{ margin: "20px 0" }}>
        <Form.Control
          type="text"
          placeholder="Search by Location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{
            marginRight: "10px",
            borderRadius: "15px",
          }}
        />
      </Form>

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

      <Offcanvas show={showForm} onHide={handleCloseForm} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <SignUpForm />
        </Offcanvas.Body>
      </Offcanvas>

      <div>
        <a href="#" onClick={(e) => { e.preventDefault(); handleShow(); }}>
          Sign in
        </a>{" "}
        or{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); handleShowRegister(); }}>
          register as a host
        </a>{" "}
        to view contact info
      </div>

      {filteredMessages.map(
        (_message, index) =>
          index % 4 === 0 && (
            <Row key={index}>
              {filteredMessages.slice(index, index + 4).map((message, subIndex) => (
                <Col key={subIndex}>
                  <Card
                    style={{
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <Card.Body
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                        lineHeight: "4px",
                      }}
                    >
                      {imageUrlsMap[message.uid] &&
                        imageUrlsMap[message.uid].map((url, index) => (
                          <img
                            style={{
                              borderRadius: "10px",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            key={index}
                            src={url}
                            alt="Uploaded"
                          />
                        ))}

                      <Card.Text>{message.city}, {message.territory}</Card.Text>

                      <Card.Text>Capacity: {message.availability}</Card.Text>
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
