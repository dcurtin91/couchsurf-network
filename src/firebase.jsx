import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    getDocs,
    collection,
    serverTimestamp,
    onSnapshot,
    addDoc,
    updateDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1IqrdEPTT1ZoeKikj2jm04xUteoGHxlk",
    authDomain: "member-portal-8a367.firebaseapp.com",
    projectId: "member-portal-8a367",
    storageBucket: "member-portal-8a367.appspot.com",
    messagingSenderId: "389153166875",
    appId: "1:389153166875:web:a2cde7e4ae132942d74abe",
    measurementId: "G-4ZCLBGQ773"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

async function sendMessage(user, address, name, email, phone, vacancy, availability) {
    try {
        const collectionName = `${user.uid}`;
        await addDoc(collection(db, collectionName), {
            uid: user.uid,
            // name: text.trim(),
            // email: text2.trim(),
            address: address,
            name: name,
            email: email,
            phone: phone,
            vacancy: vacancy ? 'Yes' : 'No',
            availability: availability,
            timestamp: serverTimestamp(),
            
            
        });
    } catch (error) {
        console.error(error);
    }
}

async function updateMessage(user, address, name, email, phone, vacancy, availability) {
    
    try {
        const collectionName = `${user.uid}`;
        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.size > 0) {
            const docRef = querySnapshot.docs[0].ref;


            await updateDoc(docRef, {
            address: address,
            name: name,
            email: email,
            phone: phone,
            vacancy: vacancy ? 'Yes' : 'No',
            availability: availability,
            });
        }
    } catch (error) {
        console.error(error);
    }
}

function getMessages(user, callback) {
    const collectionName = `${user.uid}`;
    return onSnapshot(
        collection(db, collectionName),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            if (typeof callback === 'function') {
                callback(messages);
            }
        }
    );
}



export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    sendMessage,
    getMessages,
    updateMessage
};
