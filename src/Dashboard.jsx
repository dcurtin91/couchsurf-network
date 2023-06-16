import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { collection, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { updateMessage } from "./firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vacancy, setVacancy] = useState(" ");
  const [availability, setAvailability] = useState(" ");
  const navigate = useNavigate();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingVacancy, setisEditingVacancy] = useState(false);
  const [isEditingAvailability, setIsEditingAvailability] = useState(false);
 
  const fetchUserData = async () => {
    try {
      const collectionName = `${user.uid}`;
      const doc = await getDocs(collection(db, collectionName));
      const data = doc.docs[0].data();

      setName(data.name);
      setEmail(data.email);
      setVacancy(data.vacancy);
      setAvailability(data.availability);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVacancyChange = (event) => {
    setVacancy(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  }
 
  const handleNameEdit = () => {
    setIsEditingName(true);
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handleVacancyEdit = (event) => {
    setisEditingVacancy(true);
  }
  const handleAvailabilityEdit = () => {
    setIsEditingAvailability(true);
  }

  const handleUpdate = async () => {
  try {
    const collectionName = `${user.uid}`;
    const querySnapshot = await getDocs(collection(db, collectionName));
    if (querySnapshot.size > 0) {
      const docRef = querySnapshot.docs[0].ref;

      await updateMessage(user, name, email);

      // Update the document in Firestore with the new name, email, vacancy, and availability
      const updateData = {
        name: name,
        email: email,
        vacancy: vacancy,
      };

      // Check if availability has a valid value before adding it to updateData
      if (availability !== " ") {
        updateData.availability = availability;
      }

      await updateDoc(docRef, updateData, { merge: true });

      // Fetch the updated user data and set it in the state variables
      const updatedDoc = await getDoc(docRef);
      const updatedData = updatedDoc.data();
      setName(updatedData.name);
      setEmail(updatedData.email);
      setVacancy(updatedData.vacancy);
      setAvailability(updatedData.availability);

      setIsEditingName(false);
      setIsEditingEmail(false);
      setisEditingVacancy(false);
      setIsEditingAvailability(false);
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
    <div className="dashboard">
      <div className="dashboard__container">
        Your Profile
        <div>
          {isEditingName ? (
            <input type="text" value={name} onChange={handleNameChange} />
          ) : (
            <>
              {name}{" "}
              <span className="edit-icon" onClick={handleNameEdit}>
                &#x270E;
              </span>
            </>
          )}
        </div>
        <div>
          {isEditingEmail ? (
            <input type="text" value={email} onChange={handleEmailChange} />
          ) : (
            <>
              {email}{" "}
              <span className="edit-icon" onClick={handleEmailEdit}>
                &#x270E;
              </span>
            </>
          )}
        </div>
        <div>
        Vacancy:{" "}
            {isEditingVacancy ? (
                <input type="text" value={vacancy} onChange={handleVacancyChange} />
            ) : (
                <>
                {vacancy}{" "}
                <span className="edit-icon" onClick={handleVacancyEdit}>
                &#x270E;   
                </span>
                </>
            )}
            
        </div>
        <div>
            Number of vacant rooms:{" "}
            {isEditingAvailability ? (
                <input type="text" value={availability} onChange={handleAvailabilityChange} />
            ) : (
                <>
                {availability}{" "}
                <span className="edit-icon" onClick={handleAvailabilityEdit}>
                &#x270E;
                </span>
                </>
            )}
        </div>
        <button className="dashboard__btn" onClick={handleUpdate}>
          Update
        </button>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

