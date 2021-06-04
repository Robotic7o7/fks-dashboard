import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./view-teacher-list.css"


function ViewTeacherList() {

    const [teacherList, setTeacherList] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/users/filter_users_by_role/3', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setTeacherList(data)
                console.log(teacherList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="view-teacher-list">

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Options</th>
                </tr>
                {teacherList.map((item) => {
                    return (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={"/view-teacher/" + item.user_id} className="action-item">View Details</Link><br />
                                <span className="action-item">Assign Class</span><br />
                                <span className="action-item">Update Password</span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ViewTeacherList;