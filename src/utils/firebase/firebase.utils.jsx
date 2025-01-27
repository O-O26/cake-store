import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // Could pass field = "title" as a 3rd parameter in this function
    const collectionRef = collection(db, collectionKey);
    // Using a transaction, we want to make sure that all the objects we are
    // trying to add are successful, we will do this using a batch
    const batch = writeBatch(db)
    // Each object is an array of documents, e.g. men's, women's, jackets,
    // hats are all objects we are trying to add to the database 
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        // const docRef = doc(collectionRef, object["field"].toLowerCase());
        batch.set(docRef, object);
    })
    await batch.commit()
    console.log("Done")
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;
}

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

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback,)
    // onAuthStateChanged runs everytime the auth state changes, so everytime
    // the user signs in or signs out
    // This is a permanant listener so you need to turn this off when you
    // no longer need it

    /**
     * 
     * {
     *  next: callback
     *  error: errorCallback
     *  complete: completedCallback
     * }
     * 
    */