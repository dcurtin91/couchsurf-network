import React, { useState, useEffect } from "react";
import { getMessages } from "./firebase";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Directory = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = getMessages((newMessages) => {
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
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
      {messages.map(
        (message, index) =>
          index % 3 === 0 && (
            <Row key={index}>
              {messages.slice(index, index + 3).map((message, subIndex) => (
                <Col key={subIndex}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{message.address}</Card.Title>
                      <Card.Text>{message.name}</Card.Text>
                      <Card.Text>{message.email}</Card.Text>
                      <Card.Text>{message.phone}</Card.Text>
                      <Card.Text>Vacancy: {message.vacancy}</Card.Text>
                      {message.vacancy === "No" ? null : (
                        <Card.Text>Capacity: {message.availability}</Card.Text>
                      )}
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

export default Directory;
