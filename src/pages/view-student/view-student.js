import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-student.css"


function ViewStudent(props) {

    const {id} = useParams()

    useEffect(()=>{

        fetch('http://165.22.210.235:4000/users/get_student_by_id/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        document.getElementsByClassName('view-student')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    })

    return (
        <div className="view-student">
        </div>
    )
}

export default ViewStudent;