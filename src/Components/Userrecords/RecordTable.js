import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import Update from "../Contact Us/Update";
export const ReacordTable = () => {
  const navigate = useNavigate();
  const[data,setData]=useState([])
  useEffect(() => {
    axios
      .get("https://sangeeta.vdharasoftware.com/react-get.php")
      .then(function (response) {
       console.log(response);
        setData(response.data.data);
      }
      )
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
 
  const Edit=(item)=>{
    localStorage.setItem("editableItem",JSON.stringify(item))
    navigate('/Update')
  }

  return (
    <>
      <table className="table table-dark">
      
              <thead>
                <tr>
                  <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Password</th>
                   <th scope="col" >Update</th>
                   <th scope="col" >Delet</th>
                  
                </tr>
              </thead>
              <tbody>
              {data?.map((item, index) => {
          return (
            <>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td><button type="button" name="Edit"onClick={()=>Edit(item)}>Edit </button></td>
                  <td><button type="Button" name="Delete">Delete</button></td>
                 
                </tr>
                </>
          )})}
              </tbody>
            
      </table>
    </>
  );
};
