import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-teacher-list.css"


function ViewTeacherList() {

    const [teacherList, setTeacherList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function getTeachers(){
        fetch(`http://localhost:3000/users/teachers?q=`+searchQuery, {
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
    }

    useEffect(() => {
        getTeachers()

    }, [searchQuery])

    function disableTeacher(id){
        fetch(`http://localhost:3000/users/${id}/disable`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
                    }

                    else {
                        showNotifFailed()                        
                    }
                })
                .catch((error) => {
                    showNotifFailed()
                    console.error('Error:', error);
                });

    }

    function deleteTeacher(id){
        fetch(`http://localhost:3000/users/${id}/permanent_delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
                    }

                    else {
                        showNotifFailed()                        
                    }
                })
                .catch((error) => {
                    showNotifFailed()
                    console.error('Error:', error);
                });

    }

    function showNotifSuccess(){
        document.getElementById("notif-success").style.display="block";
    }

    function showNotifFailed(){
        document.getElementById("notif-failed").style.display="block";
    }

    function closeNotif(){
        document.getElementById("notif-success").style.display="none";
        document.getElementById("notif-failed").style.display="none";
    }

    return (
        <>
        <div className="view-teacher-list">
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
                {teacherList.map((item) => {
                    return (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={"/view-teacher/" + item.user_id} className="action-item">View Details</Link><br />
                                <span className="action-item">Assign Class</span><br />
                                <span className="action-item">Update Password</span><br/>
                                <span className="action-item" onClick={e=>{disableTeacher(item.user_id)}}>Disable</span>&nbsp;
                                <span className="action-item" onClick={e=>{deleteTeacher(item.user_id)}}>Delete</span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>

        <div className="notif-component-success"id="notif-success">
            <label className="notif-component-text">Success!</label>
            <br/>
            <label className="notif-component-message">Operation done.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>

        <div className="notif-component-failed" id="notif-failed">
            <label className="notif-component-text">Failed!</label>
            <br/>
            <label className="notif-component-message">Error occured, try again.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>
        </>
    )
}

export default ViewTeacherList;