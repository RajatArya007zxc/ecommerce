import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config= {
    apiKey: "AIzaSyAzOqsc9i3DTMxkrRJzRTRIbxqvx0iyz7o",
    authDomain: "ecommerce-41f8c.firebaseapp.com",
    databaseURL: "https://ecommerce-41f8c.firebaseio.com",
    projectId: "ecommerce-41f8c",
    storageBucket: "ecommerce-41f8c.appspot.com",
    messagingSenderId: "183044696794",
    appId: "1:183044696794:web:ffc85571a10cb1102ad3e3",
    measurementId: "G-71GQH3J13G"
  };

firebase.initializeApp(config)

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;