import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { storage, auth } from "./Firebase";
import image from "./hd1080.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PhotoUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return; // Return early if user is null

    const imagesListRef = ref(storage, `${user.uid}`);
    let isMounted = true;

    listAll(imagesListRef).then((response) => {
      if (isMounted) {
        setImageUrls([]);
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
        setLoading(false); 
      }
    });

    return () => {
      isMounted = false;
    };
  }, [user]); 

  const uploadFile = async () => {
    if (imageUpload === null || user === null) return;
    const croppedImageUrl = await cropImage(imageUpload);
    const imageRef = ref(storage, `${user.uid}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, croppedImageUrl]);
      });
      navigate(0);
    });
    
  };

  const deleteImage = async (url) => {
    if (!user) return; 

    const index = imageUrls.findIndex((imageUrl) => imageUrl === url);

    if (index !== -1) {
      const updatedImageUrls = [...imageUrls];
      updatedImageUrls.splice(index, 1);
      setImageUrls(updatedImageUrls);

      try {
        const userFolderRef = ref(storage, `${user.uid}`);
        const userFolderImages = await listAll(userFolderRef);

        userFolderImages.items.forEach(async (itemRef) => {
          await deleteObject(itemRef);
        });

        console.log("All images deleted successfully.");
      } catch (error) {
        console.error("Error deleting images:", error);
      }
    }
  };

  const cropImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const aspectRatio = image.width / image.height;
          let newWidth, newHeight, offsetX, offsetY;

          if (aspectRatio > 1) {
            newWidth = 1080;
            newHeight = 1080 / aspectRatio;
            offsetX = 0;
            offsetY = (1080 - newHeight) / 2;
          } else {
            newWidth = 1080 * aspectRatio;
            newHeight = 1080;
            offsetX = (1080 - newWidth) / 2;
            offsetY = 0;
          }

          canvas.width = 1080;
          canvas.height = 1080;
          ctx.drawImage(
            image,
            offsetX,
            offsetY,
            newWidth,
            newHeight,
            0,
            0,
            1080,
            1080
          );

          const dataUrl = canvas.toDataURL(file.type);
          resolve(dataUrl);
        };
      };
      reader.readAsDataURL(file);
    });
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Row>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <input
          style={{
            marginBottom: "10px",
            fontSize: "13px",
            marginTop: "20px",
            marginLeft: "190px",
          }}
          type="file"
          disabled={imageUrls.length > 0}
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button
          style={imageUpload ?
            styles.enabledButton : styles.disabledButton}
          onClick={uploadFile}
          disabled={!imageUpload}
        >
          Upload Image
        </button>

        {imageUrls.length === 0 ? (
          <img
            style={{
              border: "1px solid black",
              marginBottom: "85px"
            }}
            src={image}
            alt="Placeholder"
          />
        ) : (
          imageUrls.map((url, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "20px",
              }}
            >
              <img
                style={{
                  border: "1px solid black",
                  marginBottom: "85px"
                  
                }}
                src={url}
                alt="Uploaded"
              />
              <button
                className="delete-button"
                onClick={() => deleteImage(url)}
              >
                X
              </button>
            </div>
          ))
        )}
      </Col>
    </Row>
  );
}

export default PhotoUpload;


const styles = {
  enabledButton: {
    borderRadius: "8px",
            marginBottom: "10px",
            marginTop: "20px",
  },
  disabledButton: {
    display: "none"
  }
}