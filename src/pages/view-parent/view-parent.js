import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-parent.css"


function ViewParent(props) {

    const {id} = useParams()

    useEffect(()=>{

        fetch('http://localhost:3000/users/get_parent_by_id/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        document.getElementsByClassName('view-parent')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    })

    return (
        <div className="view-parent">
        </div>
    )
}

export default ViewParent;