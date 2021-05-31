import React from "react";
import {useState} from "react";
import "./add-subject"

function AddSubject() {

    const [subject, setSubject] = useState('')

    function addSubject(){
        var validated = 1;
        if (!subject) {
            validated = 0;
            document.getElementById('subject').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/subjects/add', {
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
                        alert("Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    
        }
    }
    return (
        <div className="form-container">
            <span className="form-title">Add New Subject</span>
            <div className="form-field-container">
                <label className="form-field-label">Subject Name</label>
                <input className="form-field" id="subject" type="text" value={subject} onChange={e=>{e.preventDefault(); setSubject(e.target.value)}} />
            </div>
            <button className="submit-button" onClick={addSubject}>SUBMIT</button>
        </div>
    )
}

export default AddSubject;