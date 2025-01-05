import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDYqUaEoDVobVfn1fnRqgzoDriMbkkLylc",
    authDomain: "cake-store-db-fe674.firebaseapp.com",
    projectId: "cake-store-db-fe674",
    storageBucket: "cake-store-db-fe674.firebasestorage.app",
    messagingSenderId: "488144989889",
    appId: "1:488144989889:web:abd7e870086853aae1ee40"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
// .then((result) => {
//     // Handle the signed-in user
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error(error);
//   });//

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    // console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Error creating the user", error.message)
        }
    }
    return userDocRef;
}