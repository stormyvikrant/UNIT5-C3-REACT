import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    var [data,setData] =useState([]);

    useEffect(()=>{
        axios.get(" http://localhost:8080/employee").then(({data})=>{
            setData(data);
        })
    },[])

    return (
        <div className="list_container">
        {data.map((e,i)=>{
            return <Link key={i} to={`/employeedetail/${e.id}`} className="employee_card">
            <img src={e.image} className="employee_image" />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.employee_tittle}</span>
          </Link>
        })}
        
      </div>
    );
  };