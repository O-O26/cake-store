import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils"

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        // case "increment":
        //     return{
        //         value: state.value + 1
        //     }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)
    // Above we are destructuring the current user from the state
    const setCurrentUser = (user) => {
        dispatch(
            createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
        )
            // { type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user });
    }

    const value = { currentUser, setCurrentUser };

    // signOutUser()

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        });
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
