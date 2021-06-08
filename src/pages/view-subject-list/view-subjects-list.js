import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-subject-list.css"


function ViewSubjectList() {

    const [subjectList, setsubjectList] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/subjects/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setsubjectList(data)
                console.log(subjectList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    function disableSubject(id){
        fetch(`http://localhost:3000/subjects/id/${id}/disable`, {
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

    function deleteSubject(id){
        fetch(`http://localhost:3000/subjects/id/${id}/permanent_delete`, {
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
        <div className="view-subject-list">
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
                    <th>Subject Name</th>
                    <th>Subscribers</th>
                    <th>Options</th>
                </tr>
                {subjectList.map((item) => {
                    return (
                        <tr>
                            <td>{item.subject_name}</td>
                            <td>3</td>
                            <td>
                                <Link to={"/view-student/" + item.user_id} className="action-item">Edit</Link><br />
                                <span className="action-item" onClick={e=>{disableSubject(item.subject_id)}}>Disable</span>&nbsp;
                                <span className="action-item" onClick={e=>{deleteSubject(item.subject_id)}}>Delete</span>
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

export default ViewSubjectList;