import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-teacher-list.css"


function ViewTeacherList() {

    const [teacherList, setTeacherList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [updatePwdID, setUpdatePwdId] = useState('')
    const [updatedPass, setUpdatedPass] = useState('')

    function getTeachers() {
        fetch(`http://localhost:3000/users/teachers?q=` + searchQuery, {
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

    function disableTeacher(id) {
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

    function deleteTeacher(id) {
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

    function showUpdatePwd() {
        document.getElementById("pwd-update").style.display = "block";
    }

    function hideUpdatePwd() {
        document.getElementById("pwd-update").style.display = "none";
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

    function updatePassword() {
        var validated = 1;
        if (!updatedPass) {
            validated = 0;
            document.getElementById('updated-pass').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch(`http://localhost:3000/users/${updatePwdID}/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: updatedPass
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess();
                    }

                    else {
                        showNotifFailed();
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    showNotifFailed();
                });

        }
        hideUpdatePwd();
    }

    return (
        <>

            <div className="screen-main">
                <img src="/bg-2.png" className="bg-img-1" />
                <img src="/bg-4.png" className="bg-img-2" />
                <img src="/bg-1.png" className="bg-img-3" />
                <img src="/bg-3.png" className="bg-img-4" />

                <div className="view-teacher-list">
                    {/* <div className="teacher-sort-bar">
                
                {/* <div className="query-function-container">
           <button className="query-button">Sort Asscending</button>
            <button className="query-button">Sort Descending</button>
            <button className="query-button">Sort Alphabetically</button>
           </div> 
            </div> */}

                    <input className="query-field" type="text" />
                    <button className="query-button">Search</button>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                        {teacherList.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={"/view-teacher/" + item._id} className="action-item">View Details</Link><br />
                                        <span className="action-item">Assign Class</span><br />
                                        <span className="action-item" onClick={e => { e.preventDefault(); showUpdatePwd(); setUpdatePwdId(item._id) }}>Update Password</span><br />
                                        <span className="action-item" onClick={e => { disableTeacher(item._id) }}>Disable</span>&nbsp;
                                <span className="action-item" onClick={e => { deleteTeacher(item._id) }}>Delete</span>
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


                <div className="update-password" id="pwd-update">
                    <span className="form-title">Update Password</span>
                    <div className="form-field-container">
                        <label className="form-field-label">New Password</label>
                        <input className="form-field full-width-field" id="updated-pass" type="text" onChange={e => { e.preventDefault(); setUpdatedPass(e.target.value) }} />
                    </div>
                    <div className="update-pass-button-container">
                        <button className="submit-button" onClick={updatePassword}>SUBMIT</button>
                        &nbsp; &nbsp; &nbsp;
                <button className="submit-button" onClick={hideUpdatePwd}>CLOSE</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewTeacherList;