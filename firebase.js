// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDR0Jmqy5ki3fW8ni6YiRjNSx7XF_WqbcM",
authDomain: "fir-javascript-crud-761be.firebaseapp.com",
projectId: "fir-javascript-crud-761be",
storageBucket: "fir-javascript-crud-761be.appspot.com",
messagingSenderId: "937894456001",
appId: "1:937894456001:web:8e0360ef59e8e0b0444240"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveTask = (title, description) =>
addDoc(collection(db, "tasks"), {title, description});

export const getTasks = () => getDocs(collection(db, 'task'));

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deleteTasks = (id) => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));


export const updateTask = (id, newfiles) => updateDoc(doc(db, 'tasks', id), newfiles);

        