import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-admin.css"


function ViewAdmin(props) {

    const {id} = useParams()

    useEffect(()=>{

        fetch('http://localhost:3000/users/get_admin_by_id/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        document.getElementsByClassName('view-admin')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    })

    return (
        <div className="view-admin">
        </div>
    )
}

export default ViewAdmin;