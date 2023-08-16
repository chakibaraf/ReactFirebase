import { createContext, useState, useEffect } from "react"

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase-config";

export const UserContext = createContext()

export function UserContextProvider(props) {


    const signup = (email, pwd) => createUserWithEmailAndPassword
        (auth, email, pwd)

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, SetLoadingData] = useState(true)


    useEffect(()=> {
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            setCurrentUser(currentUser)
            SetLoadingData(false)
        })
        return unsuscribe;
    })

    //modal 
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if (modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if (modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: true
            })
        }
        if (modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    return (

        <UserContext.Provider value={{ modalState, toggleModals, signup , currentUser}}>
            {!loadingData &&   props.children}
        </UserContext.Provider>

    )
}