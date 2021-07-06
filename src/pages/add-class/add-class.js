import React, { useEffect, useState } from "react";
import "./add-class.css"

function AddClass() {

    const [teacherListLocal, setTeacherListLocal] = useState([])
    const [teacherListId, setTeacherListId] = useState([])
    const [teacherListFetched, setTeacherListFetched] = useState([])
    const [subjectListLocal, setSubjectListLocal] = useState([])
    const [subjectListId, setSubjectListId] = useState([])
    const [subjectListFetched, setSubjectListFetched] = useState([])

    const [className, setClassName] = useState('')

    function addTeacher(e) {
        setTeacherListLocal([...teacherListLocal, e.target.innerText])
        setTeacherListId([...teacherListId, e.target.getAttribute('data-id')])
    }

    function deleteTeacher(e) {
        console.log(e.target)
        console.log(e.target.getAttribute("data-name"))
        setTeacherListLocal(teacherListLocal.filter(item => item != e.target.getAttribute('data-name')))
    }

    function addSubject(e) {
        setSubjectListLocal([...subjectListLocal, e.target.innerText])
        setSubjectListId([...subjectListId, e.target.getAttribute('data-id')])
    }

    function deleteSubject(e) {
        setSubjectListLocal(subjectListLocal.filter(item => item != e.target.getAttribute('data-name')))
    }

    function hideSubjectSuggestions() {
        document.getElementsByClassName('subject-suggestions')[0].style.display = "none"
    }

    function hideTeacherSuggestions() {
        document.getElementsByClassName('teacher-suggestions')[0].style.display = "none"
    }


    useEffect(() => {
    }, [teacherListLocal, subjectListLocal])

    useEffect(() => {
        console.log(teacherListFetched)
        if (document.getElementById('subjects-list').value) {
            document.getElementsByClassName('subject-suggestions')[0].style.display = "block"
        }
        else {
            document.getElementsByClassName('subject-suggestions')[0].style.display = "none"
        }

        if (document.getElementById('teachers-list').value) {
            document.getElementsByClassName('teacher-suggestions')[0].style.display = "block"
        }
        else {
            document.getElementsByClassName('teacher-suggestions')[0].style.display = "none"
        }
    }, [subjectListFetched, teacherListFetched])

    function getSubjects(searchQuery) {
        fetch(`http://165.22.210.235:3000/subjects?q=` + searchQuery, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setSubjectListFetched(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    function getTeachers(searchQuery) {
        fetch(`http://165.22.210.235:3000/users/teachers?q=` + searchQuery, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setTeacherListFetched(data)
                console.log(teacherListFetched)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    function submitForm() {
        var validated = 1;
        if (!teacherListLocal) {
            validated = 0;
            document.getElementById('teachers-list').style.border = "1px solid red";
        }
        if (!subjectListLocal) {
            validated = 0;
            document.getElementById('subjects-list').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://165.22.210.235:3000/classes/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    class_name: className,
                    subjects: subjectListId,
                    teachers: teacherListId
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
                    }

                    else {
                        showNotifFailed();
                    }
                })
                .catch((error) => {
                    showNotifFailed();
                    console.error('Error:', error);
                });

        }
    }

    function clearInput() {
        setTeacherListLocal([])
        setTeacherListId([])
        setTeacherListFetched([])
        setSubjectListLocal([])
        setSubjectListId([])
        setSubjectListFetched([])
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
                <span className="form-title">Create New Class</span>
                <div className="form-field-container">
                    <label className="form-field-label">Class Name</label>
                    <input className="form-field" type="text" value={className} onChange={e => { e.preventDefault(); setClassName(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Teachers</label>
                    <input className="form-field form-field-2" type="text" id="teachers-list" onChange={e => { e.preventDefault(); getTeachers(e.target.value) }} />
                    <div className="teacher-suggestions">
                        {teacherListFetched.map((item) => {
                            return <span className="teacher-suggestions-item" data-id={item._id} onClick={e => { addTeacher(e); hideTeacherSuggestions() }}>{item.name}</span>
                        })}
                    </div>
                    <div className="bubble-list">
                        {teacherListLocal.map((item) => {
                            return <span className="bubble-list-item" data-name={item} onClick={e => { e.preventDefault(); deleteTeacher(e); }}>{item} <span className="bubble-list-item-delete">x</span></span>
                        })}
                    </div>
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Subjects</label>
                    <input className="form-field form-field-2" type="text" id="subjects-list" onChange={e => { e.preventDefault(); getSubjects(e.target.value) }} />
                    <div className="subject-suggestions">
                        {subjectListFetched.map((item) => {
                            return <span className="subject-suggestions-item" data-id={item._id} onClick={e => { addSubject(e); hideSubjectSuggestions() }}>{item.subject_name}</span>
                        })}
                    </div>
                    <div className="bubble-list">
                        {subjectListLocal.map((item) => {
                            return <span className="bubble-list-item" data-name={item} onClick={e => { e.preventDefault(); deleteSubject(e) }}>{item} <span className="bubble-list-item-delete">x</span></span>
                        })}
                    </div>
                </div>
                <button className="submit-button" onClick={submitForm}>SUBMIT</button>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Class added.</label>
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

export default AddClass;