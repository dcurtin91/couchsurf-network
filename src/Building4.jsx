import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


function Building4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [vacancy, setVacancy] = useState(" ");
  const [availability, setAvailability] = useState(" ");
  
  const fetchCollectionData = async () => {
    try {
      const collectionName = `zimPgWuiN6Vj3aVEMm5ZRTEuCmI3`;
      const doc = await getDocs(collection(db, collectionName));
      const data = doc.docs[0].data();

      setAddress(data.address);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setVacancy(data.vacancy);
      setAvailability(data.availability);
      
      
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    
    fetchCollectionData();
  }, []);
  

  return (
    
        <div>
          <h3>{address}</h3>
          {name}<br></br>
          {email}<br></br>
          {phone}<br></br>
          Vacancy:{" "}{vacancy}<br></br>
          Number of Rooms Available:{" "}{availability}<br></br>
        </div>
        
  );
}

export default Building4;

