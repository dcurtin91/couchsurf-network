import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    serverTimestamp,
    onSnapshot,
    where,
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

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
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

async function sendMessage(user, text, text2, checkbox, rooms) {
    try {
        await addDoc(collection(db, 'house'), {
            uid: user.uid,
            displayName: user.displayName,
            name: text.trim(),
            email: text2.trim(),
            vacancy: checkbox ? 'Checked' : 'Not Checked',
            availability: rooms,
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

async function updateMessage(user, text, text2, checkbox, rooms) {
    try {
        const querySnapshot = await getDocs(collection(db, 'house'));
        if (querySnapshot.size > 0) {
            const docRef = querySnapshot.docs[0].ref;


            await updateDoc(docRef, {
                uid: user.uid,
                displayName: user.displayName,
                name: text.trim(),
                email: text2.trim(),
                vacancy: checkbox ? 'Checked' : 'Not Checked',
                availability: rooms,
                timestamp: serverTimestamp(),
            });
        }
    } catch (error) {
        console.error(error);
    }
}

function getMessages(callback) {
    return onSnapshot(
        query(
            collection(db, 'house')

        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}


export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    sendMessage,
    getMessages,
    updateMessage
};
