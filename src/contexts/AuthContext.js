import { onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect,useState } from "react"
import { firebase } from "../helpers/firebase";



export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser,setCurrentUser] = useState();

    useEffect(()=>{
        onAuthStateChanged(firebase,(currentUser)=>{
            setCurrentUser(currentUser)
        })
    },[])

    return(
        <AuthContext.Provider value ={{currentUser}}>

            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContextProvider