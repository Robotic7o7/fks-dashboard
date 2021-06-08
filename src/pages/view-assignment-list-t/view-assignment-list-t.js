import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-assignment-list-t.css"
import { isTSMappedType } from "@babel/types";


function ViewAssignmentListT() {

    const [assignmentList, setAssignmentList] = useState([])
    const [subjectData, setSubjectData] = useState([]);

    //fetch assignments
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



    //fetch subjects
    useEffect(() => {

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

    function showStudentList(){
        // document.getElementById('student-list-assignment').display="block";
        document.getElementById('screen').style.display="block";
        document.getElementById('student-list-assignment').style.display="block";
    }

    function hideStudentList(){
        // document.getElementById('student-list-assignment').display="none";
        document.getElementById('screen').style.display="none";
        document.getElementById('student-list-assignment').style.display="none";
    }


    function disableAssignment(id){
        fetch(`http://localhost:3000/assignments/id/${id}/disable`, {
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

    function deleteAssignment(id){
        fetch(`http://localhost:3000/assignments/id/${id}/permanent_delete`, {
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
        <div className="view-assignment-list-t">
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
                    <th>Assignment Name</th>
                    <th>Due Date</th>
                    <th>Completed By</th>
                    <th>Options</th>
                </tr>
                {assignmentList.map((item) => {
                    return (
                        <tr>
                            <td>{item.assignment_name}</td>
                            <td>7 March 2021</td>
                            <td>0/3</td>
                            <td>
                                <Link to={"/view-assignment/" + item.assignment_id} className="action-item">View Assignment</Link><br />
                                <Link to={"/view-assignment/" + item.assignment_id} className="action-item" onClick={e=>{e.preventDefault(); showStudentList(e)}}>View Students</Link><br />
                                <span className="action-item" onClick={e=>{disableAssignment(item.assignment_id)}}>Disable</span>
                                <span className="action-item" onClick={e=>{deleteAssignment(item.assignment_id)}}>Delete</span>
                            </td>
                        </tr>
                    )
                })}
            </table>



            <div className="student-list-assignment" id="student-list-assignment">
                <span className="student-list-assignment-item">Lloyd Mathis</span>
                <span className="student-list-assignment-item">Carlos Mccoy</span>
                <span className="student-list-assignment-item">Molly Love</span>
                <span className="student-list-assignment-item">Jack Bryan</span>
                <span className="student-list-assignment-item">Oliver Bass</span>
                <span className="student-list-assignment-item">Kelly Roberts</span>
                <span className="student-list-assignment-item">Carrie Taylor</span>
                <span className="student-list-assignment-item">Jordan Knight</span>
                <span className="student-list-assignment-item">Franklin Lynch</span>
                <span className="student-list-assignment-item">Stanley Colon</span>
                <span className="student-list-assignment-item">Felicia Hubbard</span>
                <span className="student-list-assignment-item">Alfonso King</span>
                <span className="student-list-assignment-item">Bruce Wells</span>
                <span className="student-list-assignment-item">Lillian Foster</span>
                <span className="student-list-assignment-item">Clifford Hart</span>
            </div>

            <div className="screen" id="screen" onClick={e=>{e.preventDefault();hideStudentList()}}></div>
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

export default ViewAssignmentListT;