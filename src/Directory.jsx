import React, { useState, useEffect } from "react";
import { getMessages } from "./firebase";

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
      {messages.map((message) => (
        <div key={message.id}>
          <h2>{message.address}</h2>
          <p>{message.name}</p>
          <p>{message.email}</p>
          <p>{message.phone}</p>
          <p>Vacant rooms: {message.vacancy}</p>
          {message.vacancy === "No" ? null : (
            <p>Number of rooms available: {message.availability}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Directory;
