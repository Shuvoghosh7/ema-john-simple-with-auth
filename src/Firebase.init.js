// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA8q1E7EHtgSV_GV1B1X8kWaxvDCdvk6aU",
  authDomain: "ema-john-simple-7baf3.firebaseapp.com",
  projectId: "ema-john-simple-7baf3",
  storageBucket: "ema-john-simple-7baf3.appspot.com",
  messagingSenderId: "615182050291",
  appId: "1:615182050291:web:d76f76621af227f005a886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth