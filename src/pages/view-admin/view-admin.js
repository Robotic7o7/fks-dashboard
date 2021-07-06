import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-admin.css"


function ViewAdmin(props) {

    const {id} = useParams()

    const [adminData, setAdminData] = useState('')

    useEffect(()=>{

        fetch('http://165.22.210.235:3000/users/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setAdminData(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    },[])

   if(!adminData){
    return (
        <div className="view-admin" >
            Loading
        </div>
    )
   }
   else{
    return (
        <div className="screen-main">
        <img src="/bg-2.png" className="bg-img-1"/>
        <img src="/bg-4.png" className="bg-img-2"/>
        <img src="/bg-1.png" className="bg-img-3"/>
        <img src="/bg-3.png" className="bg-img-4"/>

        <div className="view-admin" >
            <label className="view-student-heading"><b>Admin Details</b></label>
            <table>
              <tr>
                  <td><b>Admin Name</b></td>
                  <td>{adminData.name}</td>
              </tr>
              <tr>
                  <td><b>Admin Email</b></td>
                  <td>{adminData.email}</td>
              </tr>
            </table>
        </div>
        </div>
        
    )
   }
}

export default ViewAdmin;