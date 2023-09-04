import React, { useEffect, useState, createContext } from 'react';
import { auth, provider } from "../fireBaseConfig";
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    const [value, setValue] = useState("")
    const handleLogIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            setUser(data.user)

        })
    }
    const handleLogOut = () => {
        auth.signOut();

        localStorage.clear()
    }
    useEffect(() => {
        // Listen for changes in the authentication state
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            // User is signed in
            setUser(authUser);
          } else {
            // User is signed out
            setUser(null);
          }
        });
    
        return () => {
          // Unsubscribe from the listener when the component unmounts
          unsubscribe();
        };
      }, []);
    
    return (
        <UserContext.Provider value={{ handleLogOut, handleLogIn, user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;