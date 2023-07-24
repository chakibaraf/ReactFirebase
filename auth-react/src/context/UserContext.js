import {createContext , useState, useEffect} from "react"

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase-config";

export const UserContext = createContext()

export function UserContextProvider(props){

const [currentUser, setCurrentUser] = useState();
const [loadingData, SetLoadingData] = useState(true)

const signup = (email,pwd) => createUserWithEmailAndPassword
    (auth,email,pwd)

//modal 
    const [modalState, setModalState]= useState({
        signUpModal:false,
        signInModal:false
    })

    const toggleModals = modal => {
        if(modal === "signIn") {
            setModalState({
                signUpModal:false,
                signInModal:true
            })
        }
        if(modal === "signUp") {
            setModalState({
                signUpModal:true,
                signInModal:true
            })
        }
        if(modal === "close") {
            setModalState({
                signUpModal:false,
                signInModal:false
            })
        }
    }

    return(

        <UserContext.Provider value={{modalState,toggleModals, signup}}>
            {props.children}
        </UserContext.Provider>

    )
}