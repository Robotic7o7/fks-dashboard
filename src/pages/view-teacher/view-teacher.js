import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-teacher.css"


function ViewTeacher(props) {

    const {id} = useParams();

    useEffect(()=>{

        fetch('http://165.22.210.235:4000/users/get_teacher_by_id/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        document.getElementsByClassName('view-teacher')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    })

    return (
        <div className="view-teacher">
        </div>
    )
}

export default ViewTeacher;