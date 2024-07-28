// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxSasEm3QKBORvcSkcIICjMSyEWELKwNQ",
    authDomain: "nhattpm-login.firebaseapp.com",
    projectId: "nhattpm-login",
    storageBucket: "nhattpm-login.appspot.com",
    messagingSenderId: "821482819748",
    appId: "1:821482819748:web:286d824d0986d2669b1631",
    measurementId: "G-9CM18XK1KR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const fbProvider = new FacebookAuthProvider();
// export const auth = initializeAuth(app,{
//     persistence: browserSessionPersistence,
//     popupRedirectResolver: browserPopupRedirectResolver,
//   })