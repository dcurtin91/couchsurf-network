// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db, logout } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { getMessages, updateMessage } from "./firebase";

// function Dashboard() {
//     const [user, loading, error] = useAuthState(auth);
//     const [name, setName] = useState("");
//     const navigate = useNavigate();
//     const [messages, setMessages] = useState([]);
//     const [editableFields, setEditableFields] = useState({});

//     const fetchUserName = async () => {
//         try {
//             const collectionName = `${user.uid}`;
//             const doc = await getDocs(collection(db, collectionName));
//             const data = doc.docs[0].data();

//             setName(data.name);
//         } catch (err) {
//             console.error(err);
//             alert("An error occurred while fetching user data");
//         }
//     };


//     useEffect(() => {
//         if (loading) return;
//         if (!user) return navigate("/");

//         fetchUserName();
//     }, [user, loading]);

//     useEffect(() => {
//         const unsubscribe = getMessages((data) => {
//             setMessages(data);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     const handleEditField = (id, field) => {
//         setEditableFields((prevEditableFields) => ({
//             ...prevEditableFields,
//             [id]: field,
//         }));
//     };

//     const handleSaveField = (id) => {
//         const message = messages.find((msg) => msg.id === id);

//         if (!user) {
//             // Handle the case when the user is not authenticated
//             console.error('User not authenticated');
//             return;
//         }

//         // Update the field in Firebase
//         updateMessage(
//             user,
//             message.name,
//             message.email,
//             message.vacancy === 'Checked',
//             message.availability
//         );

//         setEditableFields((prevEditableFields) => ({
//             ...prevEditableFields,
//             [id]: null,
//         }));
//     };

//     return (
//         <div className="dashboard">
//             <div className="dashboard__container">
//                 Logged in as
//                 <div>{name}</div>
//                 <div>{user?.email}</div>
//                 <button className="dashboard__btn" onClick={logout}>
//                     Logout
//                 </button>

//             </div>
//             <div>

//                 {messages.map((message) => (
//                     <div key={message.id}>
//                         <p>
//                             Name:{' '}
//                             {editableFields[message.id] === 'name' ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         value={message.name}
//                                         onChange={(e) =>
//                                             setMessages((prevMessages) =>
//                                                 prevMessages.map((msg) =>
//                                                     msg.id === message.id
//                                                         ? {
//                                                             ...msg,
//                                                             name: e.target.value,
//                                                         }
//                                                         : msg
//                                                 )
//                                             )
//                                         }
//                                     />
//                                     <button onClick={() => handleSaveField(message.id)}>
//                                         Save
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {message.name}
//                                     <button
//                                         onClick={() => handleEditField(message.id, 'name')}
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                         </p>
//                         <p>
//                             Email:{' '}
//                             {editableFields[message.id] === 'email' ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         value={message.email}
//                                         onChange={(e) =>
//                                             setMessages((prevMessages) =>
//                                                 prevMessages.map((msg) =>
//                                                     msg.id === message.id
//                                                         ? {
//                                                             ...msg,
//                                                             email: e.target.value,
//                                                         }
//                                                         : msg
//                                                 )
//                                             )
//                                         }
//                                     />
//                                     <button onClick={() => handleSaveField(message.id)}>
//                                         Save
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {message.email}
//                                     <button
//                                         onClick={() => handleEditField(message.id, 'email')}
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                         </p>
//                         <p>
//                             Vacancy:{' '}
//                             {editableFields[message.id] === 'vacancy' ? (
//                                 <>
//                                     <input
//                                         type="checkbox"
//                                         checked={message.vacancy === 'Checked'}
//                                         onChange={(e) =>
//                                             setMessages((prevMessages) =>
//                                                 prevMessages.map((msg) =>
//                                                     msg.id === message.id
//                                                         ? {
//                                                             ...msg,
//                                                             vacancy: e.target.checked
//                                                                 ? 'Checked'
//                                                                 : 'Not Checked',
//                                                         }
//                                                         : msg
//                                                 )
//                                             )
//                                         }
//                                     />
//                                     <button onClick={() => handleSaveField(message.id)}>
//                                         Save
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {message.vacancy}
//                                     <button
//                                         onClick={() =>
//                                             handleEditField(message.id, 'vacancy')
//                                         }
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                         </p>
//                         <p>
//                             Availability:{' '}
//                             {editableFields[message.id] === 'availability' ? (
//                                 <>
//                                     <input
//                                         type="number"
//                                         value={message.availability}
//                                         onChange={(e) =>
//                                             setMessages((prevMessages) =>
//                                                 prevMessages.map((msg) =>
//                                                     msg.id === message.id
//                                                         ? {
//                                                             ...msg,
//                                                             availability: parseInt(
//                                                                 e.target.value
//                                                             ),
//                                                         }
//                                                         : msg
//                                                 )
//                                             )
//                                         }
//                                     />
//                                     <button onClick={() => handleSaveField(message.id)}>
//                                         Save
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {message.availability}
//                                     <button
//                                         onClick={() =>
//                                             handleEditField(message.id, 'availability')
//                                         }
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { updateMessage } from "./firebase";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const fetchUserData = async () => {
        try {
            const collectionName = `${user.uid}`;
            const doc = await getDocs(collection(db, collectionName));
            const data = doc.docs[0].data();

            setName(data.name);
            setEmail(data.email);
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

    const handleUpdate = async () => {
        try {
            const collectionName = `${user.uid}`;
            const querySnapshot = await getDocs(collection(db, collectionName));
            if (querySnapshot.size > 0) {
                const docRef = querySnapshot.docs[0].ref;

                await updateMessage(user, name, email); // Call the updateMessage function passing the updated name and email

                // Update the document in Firestore with the new name and email
                await updateDoc(docRef, {
                    name: name,
                    email: email,
                });

                // Fetch the updated user data and set it in the state variables
                const updatedDoc = await docRef.update();
                const updatedData = updatedDoc.data();
                setName(updatedData.name);
                setEmail(updatedData.email);
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
                Logged in as
                <div>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <input type="text" value={email} onChange={handleEmailChange} />
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
