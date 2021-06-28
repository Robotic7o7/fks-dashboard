import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-class-list.css"


function ViewClassList() {

    const [classList, setClassList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function getClasses(){
        fetch(`http://localhost:3000/classes?q=`+searchQuery, {
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
    }

    
    useEffect(() => {
        getClasses()

    }, [searchQuery])


    function disableClass(id){
        fetch(`http://localhost:3000/classes/${id}/disable`, {
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

    function deleteClass(id){
        fetch(`http://localhost:3000/classes/${id}/permanent_delete`, {
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
        <div className="view-class-list">
            <div className="teacher-sort-bar">
            <input className="query-field" type="text" onChange={e=>{e.preventDefault();setSearchQuery(e.target.value)}}/>
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
                    <th>Student Count</th>
                    <th>Teachers</th>
                    <th>Subjects</th>
                    <th>Options</th>
                </tr>
                {classList.map((item) => {
                    return (
                        <tr>
                            <td>{item.class_name}</td>
                            <td>3</td>
                            <td>{item.teachers.map((teacher)=>{
                                return (
                                    <>
                                    <span>{teacher.name}</span><br />
                                    </>
                                )
                            })}</td>
                            <td>{item.subjects.map((subject)=>{
                                return (
                                    <>
                                    <span>{subject.subject_name}</span><br />
                                    </>
                                )
                            })}</td>
                            <td>
                                <Link to={"/view-student/" + item.user_id} className="action-item">Edit</Link><br />
                                <span className="action-item">Add Students</span><br />
                                <span className="action-item">Add Subjects</span><br />
                                <span className="action-item">Add Teachers</span><br />
                                <span className="action-item">View Students</span><br />
                                <span className="action-item" onClick={e=>{disableClass(item._id)}}>Disable</span><br />
                                <span className="action-item" onClick={e=>{deleteClass(item._id)}}>Delete</span>
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

export default ViewClassList;