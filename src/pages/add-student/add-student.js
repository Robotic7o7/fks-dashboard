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


    //parent 1

    const [parent1Name, setParent1Name] = useState('')
    const [parent1Email, setParent1Email] = useState('')
    const [parent1Password, setParent1Password] = useState('')
    const [parent1PhoneNumber, setParent1PhoneNumber] = useState('')
    const [parent1JobIndustry, setParent1JobIndustry] = useState('')
    const [parent1JobDesc, setParent1JobDesc] = useState('')
    const [parent1OfficeAddress, setParent1OfficeAddress] = useState('')
    const [parent1OfficePhoneNumber, setParent1OfficePhoneNumber] = useState('')
    const [parent1Relationship, setParent1Relationship] = useState('')

    //parent 2

    const [parent2Name, setParent2Name] = useState('')
    const [parent2Email, setParent2Email] = useState('')
    const [parent2Password, setParent2Password] = useState('')
    const [parent2PhoneNumber, setParent2PhoneNumber] = useState('')
    const [parent2JobIndustry, setParent2JobIndustry] = useState('')
    const [parent2JobDesc, setParent2JobDesc] = useState('')
    const [parent2OfficeAddress, setParent2OfficeAddress] = useState('')
    const [parent2OfficePhoneNumber, setParent2OfficePhoneNumber] = useState('')
    const [parent2Relationship, setParent2Relationship] = useState('')

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
            fetch('http://165.22.210.235:3000/users/new_student', {
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
                        fetch('http://165.22.210.235:3000/users/new_parent', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                student_id: data.id,
                                name: parent1Name,
                                email: parent1Email,
                                password: parent1Password,
                                phone_number: parent1PhoneNumber,
                                job_industry: parent1JobIndustry,
                                job_description: parent1JobDesc,
                                office_address: parent1OfficeAddress,
                                office_phone_number: parent1OfficePhoneNumber,
                                relationship: parent1Relationship
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


                        fetch('http://165.22.210.235:3000/users/new_parent', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                student_id:data.id,
                                name: parent2Name,
                                email: parent2Email,
                                password: parent2Password,
                                phone_number: parent2PhoneNumber,
                                job_industry: parent2JobIndustry,
                                job_description: parent2JobDesc,
                                office_address: parent2OfficeAddress,
                                office_phone_number: parent2OfficePhoneNumber,
                                relationship: parent2Relationship
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
        fetch(`http://165.22.210.235:3000/branches?q`, {
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
        fetch(`http://165.22.210.235:3000/classes?q`, {
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
        fetch(`http://165.22.210.235:3000/classes/${id}/get_all_subjects`, {
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

    useEffect(() => {
        getSubjects(studentCOJ)
    }, [studentCOJ])

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


                <div className="form-layout" id="add-assignment-form">
                    <div className="form-layout-row">
                        <div className="form-layout-70">
                            <div className="form-field-container">
                                <label className="form-field-label">Fullname</label>
                                <input className="form-field full-width-field" type="text" id="student-full-name" value={studentFullName} onChange={e => { e.preventDefault(); setStudentFullName(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-layout-30">
                            <div className="form-field-container">
                                <label className="form-field-label">Profile Picture</label>
                                <input className="form-field" type="file" />
                            </div>
                        </div>
                    </div>

                    <div className="form-layout-row">
                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">Admission Number</label>
                                <input className="form-field" type="text" id="admission-number" value={admissionNumber} onChange={e => { e.preventDefault(); setAdmissionNumber(e.target.value) }} />
                            </div>
                        </div>

                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">Gender</label>
                                <select className="form-field" type="text" id="student-gender" value={studentGender} onChange={e => { e.preventDefault(); setStudentGender(e.target.value) }}>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">Date Of Birth</label>
                                <input className="form-field" type="date" id="student-DOB" value={studentDOB} onChange={e => { e.preventDefault(); setStudentDOB(e.target.value) }} />

                            </div>

                        </div>
                        <div className="form-layout-25">
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
                        </div>
                    </div>

                    <div className="form-layout-row">
                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">Email</label>
                                <input className="form-field" type="text" id="student-email" value={studentEmail} onChange={e => { e.preventDefault(); setStudentEmail(e.target.value) }} />
                            </div>

                        </div>
                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">Password</label>
                                <input className="form-field" type="text" id="student-password" value={password} onChange={e => { e.preventDefault(); setPassword(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-layout-25">
                            <div className="form-field-container">
                                <label className="form-field-label">School Branch</label>
                                <select className="form-field" type="text" id="student-branch" value={studentBranch} onChange={e => { e.preventDefault(); setStudentBranch(e.target.value) }}>
                                    {branchList.map((item) => {
                                        return (
                                            <option value={item._id}>{item.branch_name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </div>
                        <div className="form-layout-25"></div>
                    </div>

                    <div className="form-layout-row">
                        <div className="form-layout-70">
                            <div className="form-field-container">
                                <label className="form-field-label">Home Address</label>
                                <input className="form-field student-address-field" type="text" id="student-address" value={studentAddress} onChange={e => { e.preventDefault(); setStudentAddress(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-layout-30 layout-stacked">
                            <div className="form-field-container">
                                <label className="form-field-label">Year Of Joining</label>
                                <input className="form-field" type="text" id="student-YOJ" value={studentYOJ} onChange={e => { e.preventDefault(); setStudentYOJ(e.target.value) }} />
                            </div>
                            <div className="form-field-container">
                                <label className="form-field-label">Class Of Joining</label>
                                <select className="form-field" type="text" id="student-COJ" onChange={e => { e.preventDefault(); setStudentCOJ(e.target.value); getSubjects(studentCOJ) }}>
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
                        </div>
                    </div>
                    <div className="form-layout-row">
                        {/* <div className="form-layout-70"> */}
                            <table>
                                <thead>
                                    <th colspan="2">parent 1</th>
                                    <th colspan="2">parent 2</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">name</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1Name} onChange={e => { e.preventDefault(); setParent1Name(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">name</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2Name} onChange={e => { e.preventDefault(); setParent2Name(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">email</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1Email} onChange={e => { e.preventDefault(); setParent1Email(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">email</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2Email} onChange={e => { e.preventDefault(); setParent2Email(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">password</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1Password} onChange={e => { e.preventDefault(); setParent1Password(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">password</label>
                                        </td>
                                        <td>
                                           <input class="form-field" type="text" value={parent2Password} onChange={e => { e.preventDefault(); setParent2Password(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">phone number</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1PhoneNumber} onChange={e => { e.preventDefault(); setParent1PhoneNumber(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">phone number</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2PhoneNumber} onChange={e => { e.preventDefault(); setParent2PhoneNumber(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">job industry</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1JobIndustry} onChange={e => { e.preventDefault(); setParent1JobIndustry(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">job industry</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2JobIndustry} onChange={e => { e.preventDefault(); setParent2JobIndustry(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">job description</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1JobDesc} onChange={e => { e.preventDefault(); setParent1JobDesc(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">job description</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2JobDesc} onChange={e => { e.preventDefault(); setParent2JobDesc(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">office address</label>
                                        </td> 
                                        <td>
                                            <input class="form-field" type="text" value={parent1OfficeAddress} onChange={e => { e.preventDefault(); setParent1OfficeAddress(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">office address</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2OfficeAddress} onChange={e => { e.preventDefault(); setParent2OfficeAddress(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">office phone number</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1OfficePhoneNumber} onChange={e => { e.preventDefault(); setParent1OfficePhoneNumber(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">office phone number</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2OfficePhoneNumber} onChange={e => { e.preventDefault(); setParent2OfficePhoneNumber(e.target.value) }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-field-label">relationship to child</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent1Relationship} onChange={e => { e.preventDefault(); setParent1Relationship(e.target.value) }} />
                                        </td>
                                        <td>
                                            <label className="form-field-label">relationship to child</label>
                                        </td>
                                        <td>
                                            <input class="form-field" type="text" value={parent2Relationship} onChange={e => { e.preventDefault(); setParent2Relationship(e.target.value) }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        {/* </div> */}
                    </div>
                            {/* parent 1
                <div className="form-field-container">
                        <label className="form-field-label">name</label>
                        <input class="form-field" type="text" value={parent1Name} onChange={e => { e.preventDefault(); setParent1Name(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">email</label>
                        <input class="form-field" type="text" value={parent1Email} onChange={e => { e.preventDefault(); setParent1Email(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">password</label>
                        <input class="form-field" type="text" value={parent1Password} onChange={e => { e.preventDefault(); setParent1Password(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">phone number</label>
                        <input class="form-field" type="text" value={parent1PhoneNumber} onChange={e => { e.preventDefault(); setParent1PhoneNumber(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">job industry</label>
                        <input class="form-field" type="text" value={parent1JobIndustry} onChange={e => { e.preventDefault(); setParent1JobIndustry(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">job description</label>
                        <input class="form-field" type="text" value={parent1JobDesc} onChange={e => { e.preventDefault(); setParent1JobDesc(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">office address</label>
                        <input class="form-field" type="text" value={parent1OfficeAddress} onChange={e => { e.preventDefault(); setParent1OfficeAddress(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">office phone number</label>
                        <input class="form-field" type="text" value={parent1OfficePhoneNumber} onChange={e => { e.preventDefault(); setParent1OfficePhoneNumber(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">relationship to child</label>
                        <input class="form-field" type="text" value={parent1Relationship} onChange={e => { e.preventDefault(); setParent1Relationship(e.target.value) }} />
                    </div>

                parent2

                <div className="form-field-container">
                        <label className="form-field-label">name</label>
                        <input class="form-field" type="text" value={parent2Name} onChange={e => { e.preventDefault(); setParent2Name(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">email</label>
                        <input class="form-field" type="text" value={parent2Email} onChange={e => { e.preventDefault(); setParent2Email(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">password</label>
                        <input class="form-field" type="text" value={parent2Password} onChange={e => { e.preventDefault(); setParent2Password(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">phone number</label>
                        <input class="form-field" type="text" value={parent2PhoneNumber} onChange={e => { e.preventDefault(); setParent2PhoneNumber(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">job industry</label>
                        <input class="form-field" type="text" value={parent2JobIndustry} onChange={e => { e.preventDefault(); setParent2JobIndustry(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">job description</label>
                        <input class="form-field" type="text" value={parent2JobDesc} onChange={e => { e.preventDefault(); setParent2JobDesc(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">office address</label>
                        <input class="form-field" type="text" value={parent2OfficeAddress} onChange={e => { e.preventDefault(); setParent2OfficeAddress(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">office phone number</label>
                        <input class="form-field" type="text" value={parent2OfficePhoneNumber} onChange={e => { e.preventDefault(); setParent2OfficePhoneNumber(e.target.value) }} />
                    </div>

                    <div className="form-field-container">
                        <label className="form-field-label">relationship to child</label>
                        <input class="form-field" type="text" value={parent2Relationship} onChange={e => { e.preventDefault(); setParent2Relationship(e.target.value) }} />
                    </div> */}

                    <div className="form-layout-row">
                        <div className="form-layout-70">
                            <button className="submit-button" onClick={submitForm}>SUBMIT</button>
                        </div>
                    </div>
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
                {/* <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/> */}
            </div>



        </>
    )
}

export default AddStudent;