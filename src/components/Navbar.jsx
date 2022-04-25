import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const Navbar = () => {
    var { Auth } = useContext(AuthContext);
    return (
        
      <div className="navbar" >
        <Link className="nav-home" to="/" style={{margin:"10px"}}>
          Home
        </Link>
        <Link className="nav-list" to="/employees"style={{margin:"13px"}}>
          Employee List
        </Link>
        <Link className="nav-admin" to="/admin" style={{margin:"14px"}}>
          Admin
        </Link>
       {
           (Auth? <Link className="nav-logout" to="/logout" style={{margin:"15px"}}>
           Logout
         </Link>:<Link className="nav-login" to="/login" style={{margin:"15px"}}>
          Login
        </Link>)

       }
       
  
        
      </div>
    );
  };