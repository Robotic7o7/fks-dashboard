import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-assignment-list.css"
import { isTSMappedType } from "@babel/types";


function ViewAssignmentList() {

    const [assignmentList, setAssignmentList] = useState([])
    const [subjectData, setSubjectData] = useState([]);
    const [searchQuery, setSearchQuery]=useState('');
    const [searchQuerySub, setSearchQuerySub]=useState('');

    //fetch assignments
    function getAssignments(){
        fetch(`http://localhost:3000/assignments?q=`+searchQuery, {
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
    }

    useEffect(() => {
        getAssignments()

    }, [searchQuery])



    //fetch subjects
    function getSubjects(){
        fetch(`http://localhost:3000/subjects?q=`+searchQuerySub, {
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

    }

    useEffect(() => {
        getSubjects()

    }, [searchQuerySub])

    //select subject

    function selectSubject(e) {
        for (var i = 0; i < document.getElementsByClassName('subject-tab').length; i++) {
            document.getElementsByClassName('subject-tab')[i].classList.remove('subject-tab-selected')
        }

        e.target.classList.add('subject-tab-selected')
    }

    //horizontal scroll for subject bar
    useEffect(() => {
        if (document.getElementsByClassName('subjects-bar')[0].addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementsByClassName('subjects-bar')[0].addEventListener('mousewheel', scrollHorizontally, false);
            // Firefox
            document.getElementsByClassName('subjects-bar')[0].addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.getElementsByClassName('subjects-bar')[0].attachEvent('onmousewheel', scrollHorizontally);
        }
    }, [])

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementsByClassName('subjects-bar')[0].scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }

    function displayUpload(){
        document.getElementById("assignment-upload").style.display="grid";
    }

    function hideUpload(){
        document.getElementById("assignment-upload").style.display="none";
    }


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
         <div className="screen-main">
            <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/>

            <div className="view-assignment-list">
            <div className="subjects-bar">
                <div className="subjects-container">
                    <div className="subject-tab subject-tab-selected" onClick={e => { e.preventDefault(); selectSubject(e) }}>
                        All
                        </div>
                    {subjectData.map((item) => {
                        return (
                            <div className="subject-tab" onClick={e => { e.preventDefault(); selectSubject(e) }}>
                                {item.subject_name}
                            </div>
                        )
                    })}
                </div>
            </div>
            {assignmentList.map((item) => {
                return (
                    <div className="assignment-list">
                        <span className="assignment-due">Due on 7 March 2021</span>
                        <Link to={"/view-assignment/" + item._id} className="assignment-name">{item.assignment_name}</Link>
                        <button onClick={displayUpload} className="submit-button">Submit Assignment</button>
                    </div>
                )
            })}
        </div >
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
        </div>
        
        </>
    )
}

export default ViewAssignmentList;