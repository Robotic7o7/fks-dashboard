import React from "react";
import { useState, useEffect } from 'react';
import "./subject.css"



function SubjectForm(){

    const [subject, setSubject] = useState('');

    function addSubject(){
        var validated = 1;
        if (!subject) {
            validated = 0;
            document.getElementById('subject').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject_name:subject
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                    }

                    else {
                        alert("Failed. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }
    return(<div className="subject-screen">
        <div className="subject-container">
            <div className="form-row">
            <label className="form-label">Subject</label>
            <input className="form-input-field" placeholder="Enter a subject" id="subject" onChange={e=>{e.preventDefault(); setSubject(e.target.value)}}></input>
            </div>
            <div className="form-button-container">
            <button className="form-button" onClick={addSubject}>Submit</button>
            </div>
        </div>
    </div>)
}

export default SubjectForm;