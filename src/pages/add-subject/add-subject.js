import React from "react";
import { useState } from "react";
import "./add-subject"

function AddSubject() {

    const [subject, setSubject] = useState('')

    function addSubject() {
        var validated = 1;
        if (!subject) {
            validated = 0;
            document.getElementById('subject').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://localhost:3000/subjects/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject_name: subject
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        clearInput()
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
    }

    function clearInput() {
        setSubject('')
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
            <div className="screen-main">
                <img src="/bg-2.png" className="bg-img-1" />
                <img src="/bg-4.png" className="bg-img-2" />
                <img src="/bg-1.png" className="bg-img-3" />
                <img src="/bg-3.png" className="bg-img-4" />
                <div className="form-container">
                    <span className="form-title">Add New Subject</span>
                    <div className="form-field-container">
                        <label className="form-field-label">Subject Name</label>
                        <input className="form-field" id="subject" type="text" value={subject} onChange={e => { e.preventDefault(); setSubject(e.target.value) }} />
                    </div>
                    <button className="submit-button" onClick={e => { addSubject() }}>SUBMIT</button>
                </div>
                <div className="notif-component-success" id="notif-success">
                    <label className="notif-component-text">Success!</label>
                    <br />
                    <label className="notif-component-message">Subject added.</label>
                    <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
                </div>

                <div className="notif-component-failed" id="notif-failed">
                    <label className="notif-component-text">Failed!</label>
                    <br />
                    <label className="notif-component-message">Error occured, try again.</label>
                    <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
                </div>
            </div>

        </>
    )
}

export default AddSubject;