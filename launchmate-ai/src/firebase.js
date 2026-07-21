import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJKMwFTwXwRGtJ60EneIMsK9so97TIka4",
  authDomain: "launchmeta-ai-c63c5.firebaseapp.com",
  projectId: "launchmeta-ai-c63c5",
  storageBucket: "launchmeta-ai-c63c5.appspot.com",
  appId: "1:762568780938:web:66b3777f4e86a751a1173",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);