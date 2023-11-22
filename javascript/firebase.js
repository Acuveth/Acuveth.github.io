const firebaseConfig = {
  apiKey: "AIzaSyDKZOLUltvPmtN-f-2IM4QLD8YZb5V5tEE",
  authDomain: "mirnavzgo.firebaseapp.com",
  projectId: "mirnavzgo",
  storageBucket: "mirnavzgo.appspot.com",
  messagingSenderId: "984448840759",
  appId: "1:984448840759:web:3adb77b4f023c76f7fbbb2",
  measurementId: "G-ZLH3BYVQMT",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firestore
window.db = firebase.firestore();
