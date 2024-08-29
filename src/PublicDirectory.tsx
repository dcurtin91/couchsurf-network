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
  const [user, loading] = useAuthState(auth);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
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
      //messages.map((message) => { ?
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
      return combinedSearch.includes(searchInput.toLowerCase()) && message.vacancy === 'Yes';
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

      <div><a href="/member-portal/login">Sign in</a> or <a href="/member-portal/register">register as a host</a> to view contact info</div>
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
                      marginBottom: "20px"
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
