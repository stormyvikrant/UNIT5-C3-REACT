import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{
    const [Auth,setAuth] = useState(false);

    function handleAuth(state){
      
            setAuth(state)
        
           
        
    }
    
    return <AuthContext.Provider value={{Auth,handleAuth}}>{children}</AuthContext.Provider>
}