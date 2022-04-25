import { createContext, useState } from "react";

var EmployeeContext = createContext();


export const EmployeeContextProvider = ({Children})=>{
    const [totalEmployees,setTotalEmployee] = useState(0);
    const [totalTerminated,settotalTerminated] = useState(0)

    return <EmployeeContext.Provider>{Children}</EmployeeContext.Provider>
}