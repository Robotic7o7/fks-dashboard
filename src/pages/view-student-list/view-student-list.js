import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-student-list.css"


function ViewStudentList() {

    const [studentList, setStudentList] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/users/filter_users_by_role/5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setStudentList(data)
                console.log(studentList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="view-student-list">
            <div className="teacher-sort-bar">
                <input className="query-field" type="text" />
                <button className="query-button">Search</button>
                {/* <div className="query-function-container">
           <button className="query-button">Sort Asscending</button>
            <button className="query-button">Sort Descending</button>
            <button className="query-button">Sort Alphabetically</button>
           </div> */}
            </div>

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Options</th>
                </tr>
                {studentList.map((item) => {
                    return (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={"/view-student/" + item.user_id} className="action-item">View Details</Link><br />
                                <span className="action-item">View Parents</span><br />
                                <span className="action-item">Update Password</span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ViewStudentList;