//Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDRzesmiG2gLoxtedVMELGMi5K5UjfceAw",
    authDomain: "logincomfamaisabel.firebaseapp.com",
    projectId: "logincomfamaisabel",
    storageBucket: "logincomfamaisabel.appspot.com",
    messagingSenderId: "936556970167",
    appId: "1:936556970167:web:2a8b4cf20590500c8c8d32",
    measurementId: "G-BM2K9S1TEJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  