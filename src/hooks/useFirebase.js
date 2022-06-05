import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(result => {
            setUsers(result.user);
            
        })
        .finally(()=> {
            setIsLoading(false)
        })
    }
    
    useEffect(()=> {
     const unsubscribed = onAuthStateChanged(auth, (user)=>{
           if(user){
               setUsers(user)
           }
           else{
               setUsers({})
           }
           setIsLoading(false)
       })
       return () => unsubscribed;
    }, [])
    
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=> { })
        .finally(()=> {
            setIsLoading(false)
        })
    }

    return {
        users,
        signInUsingGoogle,
        logOut,
        isLoading
        
    }
}

export default useFirebase;