import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const Login = () => {
    var {handleAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit= ()=>{
            handleAuth(true);
            navigate("/")
    }
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input onClick={handleSubmit} type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };