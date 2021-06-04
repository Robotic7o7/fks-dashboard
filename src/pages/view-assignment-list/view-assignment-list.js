import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-assignment-list.css"


function ViewAssignmentList() {

    const [assignmentList, setAssignmentList] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/assignments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setAssignmentList(data)
                console.log(assignmentList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="view-assignment-list">

            {assignmentList.map((item) => {
                return (
                    <div className="assignment-list">
                        <Link to={"/view-assignment/" + item.assignment_id} className="assignment-name">{item.assignment_name}</Link>
                    </div>
                )
            })}
        </div >
    )
}

export default ViewAssignmentList;