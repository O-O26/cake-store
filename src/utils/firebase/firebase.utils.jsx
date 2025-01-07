import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth = 
async (userAuth, additionalInfo={}) => {
    if(!userAuth) return;
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
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("Error creating the user", error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
}