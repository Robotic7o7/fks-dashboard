import React from "react";
import {useState} from "react";
import "./add-student.css"


function AddStudent() {

    const [studentProfileImg, setStudentProfileImg] = useState('');
    const [admissionNumber, setAdmissionNumber] = useState('');
    const [studentFullName, setStudentFullName] = useState('');
    const [studentDOB, setStudentDOB] = useState('');
    const [studentGender, setStudentGender] = useState('');
    const [studentBloodGroup, setStudentBloodGroup] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentBranch, setStudentBranch] = useState('');
    const [studentAddress, setStudentAddress] = useState('');
    const [studentYOJ, setStudentYOJ] = useState('');
    const [studentCOJ, setStudentCOJ] = useState('');

    function submitForm(){
        var validated = 1;
        if (!admissionNumber) {
            validated = 0;
            document.getElementById('admission-number').style.border = "1px solid red";
        }
        if (!studentFullName) {
            validated = 0;
            document.getElementById('student-full-name').style.border = "1px solid red";
        }
        if (!setStudentDOB) {
            validated = 0;
            document.getElementById('student-DOB').style.border = "1px solid red";
        }
        if (!studentGender) {
            validated = 0;
            document.getElementById('student-gender').style.border = "1px solid red";
        }
        if (!studentBloodGroup) {
            validated = 0;
            document.getElementById('student-blood-group').style.border = "1px solid red";
        }
        if (!studentEmail) {
            validated = 0;
            document.getElementById('student-email').style.border = "1px solid red";
        }
        if (!studentBranch) {
            validated = 0;
            document.getElementById('student-branch').style.border = "1px solid red";
        }
        if (!studentAddress) {
            validated = 0;
            document.getElementById('student-address').style.border = "1px solid red";
        }
        if (!studentYOJ) {
            validated = 0;
            document.getElementById('student-YOJ').style.border = "1px solid red";
        }
        if (!studentCOJ) {
            validated = 0;
            document.getElementById('student-COJ').style.border = "1px solid red";
        }
        if (validated == 1) {
            fetch('http://localhost:3000/student/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    admission_number:admissionNumber,
                    full_name:studentFullName,
                    date_of_birth:studentDOB,
                    gender:studentGender,
                    blood_group:studentBloodGroup,
                    email:studentEmail,
                    branch:studentBranch,
                    address:studentAddress,
                    year_of_join:studentYOJ,
                    class_of_join:studentCOJ
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
            <span className="form-title">Add Student</span>
            <div className="form-field-container">
                <label className="form-field-label">Profile Picture</label>
                <input className="form-field" type="file" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Admission Number</label>
                <input className="form-field" type="text" id="admission-number" value={admissionNumber} onChange={e=>{e.preventDefault(); setAdmissionNumber(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Fullname</label>
                <input className="form-field" type="text" id="student-full-name" value={studentFullName} onChange={e=>{e.preventDefault(); setStudentFullName(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Date Of Birth</label>
                <input className="form-field" type="text" id="student-DOB" value={studentDOB} onChange={e=>{e.preventDefault(); setStudentDOB(e.target.value)}}/>
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Gender</label>
                <input className="form-field" type="text" id="student-gender" value={studentGender} onChange={e=>{e.preventDefault(); setStudentGender(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Blood Group</label>
                <input className="form-field" type="text" id="student-blood-group" value={studentBloodGroup} onChange={e=>{e.preventDefault(); setStudentBloodGroup(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Email</label>
                <input className="form-field" type="text" id="student-email" value={studentEmail} onChange={e=>{e.preventDefault(); setStudentEmail(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">School Branch</label>
                <input className="form-field" type="text" id="student-branch" value={studentBranch} onChange={e=>{e.preventDefault(); setStudentBranch(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Home Address</label>
                <input className="form-field" type="text" id="student-address" value={studentAddress} onChange={e=>{e.preventDefault(); setStudentAddress(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Year Of Joining</label>
                <input className="form-field" type="text" id="student-YOJ" value={studentYOJ} onChange={e=>{e.preventDefault(); setStudentYOJ(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Class Of Joining</label>
                <input className="form-field" type="text" id="student-COJ" value={studentCOJ} onChange={e=>{e.preventDefault(); setStudentCOJ(e.target.value)}} />
            </div>
            <button className="submit-button" onClick={submitForm}>SUBMIT</button>
        </div>
    )
}

export default AddStudent;