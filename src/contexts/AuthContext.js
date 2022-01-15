import { onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect,useState } from "react"
import { firebase } from "../helpers/firebase";



export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser,setCurrentUser] = useState();
    const [toastMessage,settoastMessage] = useState();


    useEffect(()=>{
        onAuthStateChanged(firebase,(currentUser)=>{
            setCurrentUser(currentUser)
            settoastMessage();
            settoastMessage(`Hoşgeldiniz ${currentUser.displayName}`)
        })
    },[])

    return(
        <AuthContext.Provider value ={{currentUser,toastMessage}}>

            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContextProvider