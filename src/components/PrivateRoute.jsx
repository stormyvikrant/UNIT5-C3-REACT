import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"



export const ProtectedRoute = ({ children })=>{
var {Auth} =useContext(AuthContext)
if(Auth===false){
    return <Navigate to={"/login"}></Navigate>
}
 return children
}