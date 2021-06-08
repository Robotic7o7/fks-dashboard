import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./view-assignment.css"


function ViewAssignment(props) {

    const { id } = useParams()
    const [assignment, setAssignment] = useState('')

    useEffect(() => {

        fetch('http://localhost:3000/assignments/id/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setAssignment(data)
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
                    <span className="assignment-details-name">{assignment[0].assignment_name}</span>
                    {JSON.parse(assignment[0].assignment_value).map((item) => {
                        if (item.question_type == "mcq") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_value}</span>
                                    {item.options.map((option) => {
                                        return (
                                            <span className="question-option">{j + ") " + option.value}<span className="hidden">{j++}</span></span>
                                        )
                                    })}
                                    <span className="hidden">{i++}{j = 1}</span>
                                </div>
                            )

                        }
                        else if (item.question_type == "la") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_value}</span>
                                    <span className="hidden">{i++}</span>
                                </div>
                            )

                        }
                        else if (item.question_type == "sa") {
                            return (
                                <div className="question">
                                    <span className="question-value">{i + ") " + item.question_value}</span>
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