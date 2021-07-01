import React from "react";
import { useState } from "react";
import "./add-teacher"


function AddTeacher() {

    const [profileImg, setProfileImg] = useState('')
    const [fullname, setFullname] = useState('')
    const [teacherPhoneNumber, setTeacherPhoneNumber] = useState('')
    const [teacherEmail, setTeacherEmail] = useState('')
    const [teacherDesc, setTeacherDesc] = useState('')
    const [branch, setBranch] = useState('')

    function submitTeacher() {
        var validated = 1;
        if (!profileImg) {
            validated = 0;
            document.getElementById('profile-image').style.border = "1px solid red";
        }

        if (!fullname) {
            validated = 0;
            document.getElementById('teacher-full-name').style.border = "1px solid red";
        }

        if (!teacherPhoneNumber) {
            validated = 0;
            document.getElementById('teacher-phone-number').style.border = "1px solid red";
        }

        if (!teacherEmail) {
            validated = 0;
            document.getElementById('teacher-email').style.border = "1px solid red";
        }

        if (!teacherDesc) {
            validated = 0;
            document.getElementById('teacher-description').style.border = "1px solid red";
        }

        if (!branch) {
            validated = 0;
            document.getElementById('branch').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://localhost:3000/users/new_teacher', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: fullname,
                    email: teacherEmail,
                    phone_number: teacherPhoneNumber,
                    branch: branch,
                    short_desc: teacherDesc,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
                        clearInput()
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

    }

    function clearInput() {
        setProfileImg('')
        setFullname('')
        setTeacherPhoneNumber('')
        setTeacherEmail('')
        setTeacherDesc('')
        setBranch('')
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
            <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/>

            <div className="form-container">
                <span className="form-title">Add Teacher</span>
                <div className="form-field-container">
                    <label className="form-field-label">Profile Picture</label>
                    <input className="form-field" id="profile-image" type="file" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Fullname</label>
                    <input className="form-field" id="teacher-full-name" type="text" value={fullname} onChange={e => { e.preventDefault(); setFullname(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Phone Number</label>
                    <input className="form-field" id="teacher-phone-number" type="text" value={teacherPhoneNumber} onChange={e => { e.preventDefault(); setTeacherPhoneNumber(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Email Address</label>
                    <input className="form-field" id="teacher-email" type="text" value={teacherEmail} onChange={e => { e.preventDefault(); setTeacherEmail(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Description</label>
                    <input className="form-field" id="teacher-description" type="text" value={teacherDesc} onChange={e => { e.preventDefault(); setTeacherDesc(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">School Branch</label>
                    <input className="form-field" id="branch" type="text" value={branch} onChange={e => { e.preventDefault(); setBranch(e.target.value) }} />
                </div>
                <button className="submit-button" onClick={submitTeacher}>SUBMIT</button>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Teacher added.</label>
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

export default AddTeacher;