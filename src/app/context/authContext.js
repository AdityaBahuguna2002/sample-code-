"use client";

import { useContext, createContext } from "react";
import { useState } from "react";


const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({children, initialAuth}) => {
    const [auth, setAuth] = useState(initialAuth);
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
};