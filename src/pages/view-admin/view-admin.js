import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-admin.css"


function ViewAdmin(props) {

    const {id} = useParams()

    const [adminData, setAdminData] = useState('')

    useEffect(()=>{

        fetch('http://165.22.210.235:4000/users/'+id, {
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
    })

   if(!adminData){
    return (
        <div className="view-admin" >
            Loading
        </div>
    )
   }
   else{
    return (
        <div className="view-admin" >
            <span>Name: {adminData.name}</span>
            <span >email: {adminData.email}</span>
        </div>
    )
   }
}

export default ViewAdmin;