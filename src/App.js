import "./App.css"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Routes,Route } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
// app function
 
function App() {

  var { Auth } = useContext(AuthContext);
  
  return (
    <div className="App">
      <Navbar />
   
//    routes
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employees" element={<ProtectedRoute>
          <EmployeeList/>
          </ProtectedRoute>}></Route>
        <Route path="/employees/:id" element={<ProtectedRoute>
          <EmployeeDetails/>
        </ProtectedRoute>}></Route>
        <Route path="/admin" element={<ProtectedRoute>
          <Admin/>
        </ProtectedRoute>}></Route>
        <Route path={Auth?"/logout":"/login" } element={Auth?<Logout/>:<Login/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
