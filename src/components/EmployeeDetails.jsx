import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const EmployeeDetails = () => {
    var {id} = useParams();
    const [data,setdata] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
            setdata(data);
        })

    },[])
    console.log(data.tasks);
    return (
        
      <div className="user_details">
    
        <img src={data.image} className="user_image" />
        <h4 className="user_name">{data.user_name}</h4>
        <span className="user_salary">{data.salary}</span>
        <span className="tasks">
            {data.tasks.map((e)=>{
               return  <li className="task">{e}</li>
            })}
         
        </span>
        Status: <b className="status">{data.status}</b>
        Title: <b className="title">{data.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };