import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-subject-list.css"


function ViewSubjectList() {

    const [subjectList, setsubjectList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function getSubjects() {
        fetch(`http://165.22.210.235:4000/subjects?q=`+searchQuery, {
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
    }

    useEffect(() => {
        getSubjects()

    }, [searchQuery])

    function disableSubject(id) {
        fetch(`http://165.22.210.235:4000/subjects/${id}/disable`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                    showNotifSuccess()
                    getSubjects()
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

    function enableSubject(id) {
        fetch(`http://165.22.210.235:4000/subjects/${id}/enable`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                    showNotifSuccess()
                    getSubjects()
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

    function deleteSubject(id) {
        fetch(`http://165.22.210.235:4000/subjects/${id}/permanent_delete`, {
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
                    getSubjects()
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

    function showNotifSuccess() {
        document.getElementById("notif-success").style.display = "block";
    }

    function showNotifFailed() {
        document.getElementById("notif-failed").style.display = "block";
    }

    function closeNotif() {
        document.getElementById("notif-success").style.display = "none";
        document.getElementById("notif-failed").style.display = "none";
    }


    return (
        <>
            <div className="view-subject-list">
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
                                    {item.disable ?
                                        <span className="action-item" onClick={e => { enableSubject(item._id) }}>Enable</span>
                                        :
                                        <span className="action-item" onClick={e => { disableSubject(item._id) }}>Disable</span>}
                                    <br />
                                    <span className="action-item action-item-red" onClick={e => { deleteSubject(item._id) }}>Permanent Delete</span>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Operation done.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>

            <div className="notif-component-failed" id="notif-failed">
                <label className="notif-component-text">Failed!</label>
                <br />
                <label className="notif-component-message">Error occured, try again.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>
        </>
    )
}

export default ViewSubjectList;