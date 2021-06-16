import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-assignment-list.css"
import { isTSMappedType } from "@babel/types";


function ViewAssignmentList() {

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



    return (
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
                        <Link to={"/view-assignment/" + item.assignment_id} className="assignment-name">{item.assignment_name}</Link>
                    </div>
                )
            })}
        </div >
    )
}

export default ViewAssignmentList;