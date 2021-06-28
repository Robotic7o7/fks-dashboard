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

    if (assignment) {
        return (
            <div className="view-assignment">
                <div className="teacher-sort-bar">
                    <button className="submit-button submit-assignment-button">Submit Assignment</button>
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