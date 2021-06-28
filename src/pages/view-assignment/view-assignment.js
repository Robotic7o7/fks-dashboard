import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./view-assignment.css"


function ViewAssignment(props) {

    const { id } = useParams()
    const [assignment, setAssignment] = useState('')

    useEffect(() => {
        console.log(id)

        fetch(`http://localhost:3000/assignments/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setAssignment(data)
                console.log(data)
                console.log(assignment)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    //question counter
    var i = 1;

    //option counter
    var j = 1;


    function submitAssignment(){
        fetch('http://localhost:3000/upload/:id/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
            }),
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

    function displayUpload(){
        document.getElementById("assignment-upload").style.display="grid";
    }

    function hideUpload(){
        document.getElementById("assignment-upload").style.display="none";
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


    if (assignment) {
        return (
            <>
            <div className="view-assignment">
                <div className="teacher-sort-bar">
                    <button className="submit-button submit-assignment-button" onClick={displayUpload}>Submit Assignment</button>
                    {/* <div className="query-function-container">
           <button className="query-button">Sort Asscending</button>
            <button className="query-button">Sort Descending</button>
            <button className="query-button">Sort Alphabetically</button>
           </div> */}
                </div>

                <div className="assignment-details">
                    <span className="assignment-details-name">{assignment.assignment_name}</span>
                    {assignment.questions.map((item) => {
                        if (item.question_type == "MCQ") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_text}</span>
                                    <span className="question-option">1) {item.option1}</span>
                                    <span className="question-option">2) {item.option2}</span>
                                    <span className="question-option">3) {item.option3}</span>
                                    <span className="question-option">4) {item.option4}</span>
                                    {/* <span className="hidden">{i++}{j = 1}</span> */}
                                </div>
                            )

                        }
                        else if (item.question_type == "LA") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_text}</span>
                                    <span className="hidden">{i++}</span>
                                </div>
                            )

                        }
                        else if (item.question_type == "SA") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_text}</span>
                                    <span className="hidden">{i++}</span>
                                </div>
                            )

                        }
                    })}
                </div>
            </div>

            <div className="upload-assignment-popup" id="assignment-upload">
             <div className="form-upload-container">
             <span className="form-title">Upload Assignment</span>
                <div className="form-field-container">
                <label className="form-field-label">Upload File</label>
                <input className="form-field full-width-field" type="file" />
                </div>
                <button className="submit-button" onClick={submitAssignment} >SUBMIT</button>
                <button className="submit-button button-secondary" onClick={hideUpload}>CLOSE</button>
             </div>
         </div>


         <div className="notif-component-success"id="notif-success">
            <label className="notif-component-text">Success!</label>
            <br/>
            <label className="notif-component-message">Assignment Submitted.</label>
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

    else {
        return (
            <div>
                loading
            </div>
        )
    }
}

export default ViewAssignment;