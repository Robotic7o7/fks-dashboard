import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-assignment-list.css"
import { isTSMappedType } from "@babel/types";


function ViewAssignmentList() {

    const [assignmentList, setAssignmentList] = useState([])
    const [subjectData, setSubjectData] = useState([]);

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

            fetch('http://localhost:3000/subjects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setSubjectData(data)
                console.log(subjectData)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    useEffect(() => {

        
    }, [])

    return (
        <div className="view-assignment-list">
            <div className="subjects-sort-bar">
                <div className="subjects-container">
                    {subjectData.map((item)=>{
                        return(
                            <div className="subject-tab">
                                {item.subject_name}
                            </div>
                        )
                    })}
                </div>
            </div>
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