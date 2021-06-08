import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-class-list.css"


function ViewClassList() {

    const [classList, setClassList] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/classes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setClassList(data)
                console.log(classList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="view-class-list">
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
                    <th>Class Name</th>
                    <th>Subscribers</th>
                    <th>Options</th>
                </tr>
                {classList.map((item) => {
                    return (
                        <tr>
                            <td>{item.class_name}</td>
                            <td>3</td>
                            <td>
                                <Link to={"/view-student/" + item.user_id} className="action-item">Edit</Link><br />
                                <span className="action-item">Add Students</span><br />
                                <span className="action-item">View Students</span><br />
                                <span className="action-item">Add Teachers</span><br />
                                <span className="action-item">View Teachers</span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ViewClassList;