import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpnvj2NttgmfELxfE2sMk8GuFLDJQmwIY",
  authDomain: "login-wikianimal.firebaseapp.com",
  projectId: "login-wikianimal",
  storageBucket: "login-wikianimal.appspot.com",
  messagingSenderId: "77029329053",
  appId: "1:77029329053:web:59ed2e6a944ed404af6c74",
  measurementId: "G-Z3JRP9RJCR"
};

export const firebase = initializeApp(firebaseConfig);
//export const auth = getAuth(firebase)
export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(AsyncStorage)
  });