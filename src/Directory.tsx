import React, { useState, useEffect } from "react";
import { getMessages, storage, auth, db } from "./Firebase.jsx"; 
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore"; 
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import placeholder from "./hd1080.png";

interface Message {
  uid: string;
  city: string;
  territory: string;
  address: string;
  availability: number;
  name: string;
  email: string;
  phone: string;
  vacancy: string;
}

interface ImageUrlsMap {
  [uid: string]: string[];
}

const Directory: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [imageUrlsMap, setImageUrlsMap] = useState<ImageUrlsMap>({});
  const [loading] = useAuthState(auth); //user
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  // const fetchUserData = async () => {
  //   try {
  //     if (user) {
  //       const docId = user.uid;
  //       const docRef = await getDoc(doc(db, "properties", docId));

  //       if (docRef.exists()) {
  //         const data = docRef.data();
  //         console.log(data);
  //       } 
  
  //     } 
  //     else if (!user) {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occurred while fetching user data");
  //   }
  // };

  // useEffect(() => {
    const checkUserDocs = async () => {
      const querySnapshot = await getDocs(collection(db, "properties"));
      if (!querySnapshot.empty) {
        navigate("/");
      } 
      // else {
      //   navigate("/");
      // }
    };

    // if (user) {
    //   fetchUserData();
    // } 
    if (!loading) {
      checkUserDocs();
    };
  // }, [loading, navigate]); //user was here

  

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
        const combinedSearch =
          `${message.city} ${message.territory}`.toLowerCase();
        return (
          combinedSearch.includes(searchInput.toLowerCase()) &&
          message.vacancy === "Yes"
        );
      })
    );
  }, [searchInput, messages]);

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
      {filteredMessages.map(
        (_message, index) =>
          index % 4 === 0 && (
            <Row key={index}>
              {filteredMessages
                .slice(index, index + 4)
                .map((message, subIndex) => (
                  <Col key={subIndex}>
                    <Card
                      style={{
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                        marginBottom: "30px",
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
                        imageUrlsMap[message.uid].length > 0 ? (
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
                          ))
                        ) : (
                          <img
                            style={{
                              borderRadius: "10px",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            src={placeholder}
                            alt="Uploaded"
                          />
                        )}

                        <Card.Text>{message.address}</Card.Text>
                        <Card.Text style={{ paddingBottom: "10px" }}>
                          {message.city}, {message.territory}
                        </Card.Text>
                        <Card.Text style={{ paddingBottom: "10px" }}>
                          Capacity: {message.availability}
                        </Card.Text>

                        <Card
                          style={{
                            backgroundColor: "#d4e4fc",
                            height: "80px",
                            border: "none",
                          }}
                        >
                          <Card.Body>
                            <Card.Text>{message.name}</Card.Text>
                            <Card.Text>
                              <a href={`mailto:${message.email}`}>
                                {message.email}
                              </a>
                            </Card.Text>
                            <Card.Text>{message.phone}</Card.Text>
                          </Card.Body>
                        </Card>
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
