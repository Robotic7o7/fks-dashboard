import React, { useEffect } from "react";
import { useState } from "react";
import "./add-student.css"


function AddStudent() {

    const [studentProfileImg, setStudentProfileImg] = useState('');
    const [admissionNumber, setAdmissionNumber] = useState('');
    const [password, setPassword] = useState('');
    const [studentFullName, setStudentFullName] = useState('');
    const [studentDOB, setStudentDOB] = useState('');
    const [studentGender, setStudentGender] = useState('');
    const [studentBloodGroup, setStudentBloodGroup] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentBranch, setStudentBranch] = useState('');
    const [studentAddress, setStudentAddress] = useState('');
    const [studentYOJ, setStudentYOJ] = useState('');
    const [studentCOJ, setStudentCOJ] = useState('');
    const [branchList, setBranchList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);

    function submitForm() {
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
            fetch('http://localhost:3000/users/new_student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    admission_number: admissionNumber,
                    password: password,
                    full_name: studentFullName,
                    date_of_birth: studentDOB,
                    gender: studentGender,
                    blood_group: studentBloodGroup,
                    email: studentEmail,
                    branch: studentBranch,
                    address: studentAddress,
                    year_of_join: studentYOJ,
                    class_of_join: studentCOJ
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
        setStudentProfileImg('');
        setAdmissionNumber('');
        setPassword('');
        setStudentFullName('');
        setStudentDOB('');
        setStudentGender('');
        setStudentBloodGroup('');
        setStudentEmail('');
        setStudentBranch('');
        setStudentAddress('');
        setStudentYOJ('');
        setStudentCOJ('');
    }

    useEffect(() => {
        getBranches()
        getClasses()
    }, [])


    function getBranches() {
        fetch(`http://localhost:3000/branches?q`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setBranchList(data)
                console.log(branchList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function getClasses() {
        fetch(`http://localhost:3000/classes?q`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setClassList(data)
                console.log(classList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    function getSubjects(id) {
        fetch(`http://localhost:3000/classes/${id}/get_all_subjects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setSubjectList(data)
                console.log(subjectList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(()=>{
        getSubjects(studentCOJ)
    },[studentCOJ])

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
            <div className="form-container">
                <span className="form-title">Add Student</span>
                <div className="form-field-container">
                    <label className="form-field-label">Profile Picture</label>
                    <input className="form-field" type="file" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Admission Number</label>
                    <input className="form-field" type="text" id="admission-number" value={admissionNumber} onChange={e => { e.preventDefault(); setAdmissionNumber(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Password</label>
                    <input className="form-field" type="text" id="student-password" value={password} onChange={e => { e.preventDefault(); setPassword(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Fullname</label>
                    <input className="form-field" type="text" id="student-full-name" value={studentFullName} onChange={e => { e.preventDefault(); setStudentFullName(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Date Of Birth</label>
                    <input className="form-field" type="date" id="student-DOB" value={studentDOB} onChange={e => { e.preventDefault(); setStudentDOB(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Gender</label>
                    <select className="form-field" type="text" id="student-gender" value={studentGender} onChange={e => { e.preventDefault(); setStudentGender(e.target.value) }}>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Blood Group</label>
                    <select className="form-field" type="text" id="student-blood-group" value={studentBloodGroup} onChange={e => { e.preventDefault(); setStudentBloodGroup(e.target.value) }}>
                        <option value="A_POSITIVE">A Positive</option>
                        <option value="O_POSITIVE">O Positive</option>
                        <option value="B_POSITIVE">B Positive</option>
                        <option value="AB_POSITIVE">AB Positive</option>
                        <option value="AB_POSITIVE">AB Positive</option>
                        <option value="A_NEGATIVE">A Negative</option>
                        <option value="O_NEGATIVE">O Negative</option>
                        <option value="B_NEGATIVE">B Negative</option>
                        <option value="AB_NEGATIVE">AB Negative</option>
                    </select>
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Email</label>
                    <input className="form-field" type="text" id="student-email" value={studentEmail} onChange={e => { e.preventDefault(); setStudentEmail(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">School Branch</label>
                    <select className="form-field" type="text" id="student-branch" value={studentBranch} onChange={e => { e.preventDefault(); setStudentBranch(e.target.value) }}>
                        {branchList.map((item) => {
                            return (
                                <option value={item.branch_name}>{item.branch_name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Home Address</label>
                    <input className="form-field" type="text" id="student-address" value={studentAddress} onChange={e => { e.preventDefault(); setStudentAddress(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Year Of Joining</label>
                    <input className="form-field" type="text" id="student-YOJ" value={studentYOJ} onChange={e => { e.preventDefault(); setStudentYOJ(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Class Of Joining</label>
                    <select className="form-field" type="text" id="student-COJ" value={studentCOJ} onChange={e => { e.preventDefault(); setStudentCOJ(e.target.value); getSubjects(studentCOJ) }}>
                        <option selected>--select-class--</option>
                        {classList.map((item) => {
                            return (
                                <option value={item._id}>{item.class_name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Subjects</label>
                    Select All<input type="checkbox" />
                    {subjectList.map((item) => {
                        return (
                            <div>
                                {item.subject_name}<input type="checkbox" />
                            </div>
                        )
                    })}
                </div>
                <button className="submit-button" onClick={submitForm}>SUBMIT</button>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Student added.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>

            <div className="notif-component-failed" id="notif-failed">
                <label className="notif-component-text">Failed!</label>
                <br />
                <label className="notif-component-message">Error occured, try again.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>
        </>
    )
}

export default AddStudent;