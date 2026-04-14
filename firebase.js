import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyAVg75Khg0Wfr2AX-M5RsL2s1FXasv8yjg",
    authDomain: "aistack-pro.firebaseapp.com",
    databaseURL: "https://aistack-pro-default-rtdb.firebaseio.com",
    projectId: "aistack-pro",
    storageBucket: "aistack-pro.firebasestorage.app",
    messagingSenderId: "440459282352",
    appId: "1:440459282352:web:e7244807322875bbf7b875",
    measurementId: "G-HEST7ZV4QC"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const FirebaseDB = {
    async getData(colName) {
        const snapshot = await getDocs(collection(db, colName));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async addData(colName, data) {
        return await addDoc(collection(db, colName), data);
    },
    async updateData(colName, id, data) {
        const docRef = doc(db, colName, id);
        return await updateDoc(docRef, data);
    }
};
