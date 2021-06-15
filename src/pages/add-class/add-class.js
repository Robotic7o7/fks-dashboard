import React, { useEffect, useState } from "react";
import "./add-class.css"

function AddClass() {

    const [teacherListLocal, setTeacherListLocal] = useState([])
    const [teacherListFetched, setTeacherListFetched] = useState([])
    const [subjectListLocal, setSubjectListLocal] = useState([])
    const [subjectListFetched, setSubjectListFetched] = useState([])
    const [className, setClassName] = useState('')

    function addTeacher(value){
        setTeacherListLocal([...teacherListLocal, value])
    }

    function deleteTeacher(e){
        console.log(e.target)
        console.log(e.target.getAttribute("data-name"))
        setTeacherListLocal(teacherListLocal.filter(item => item!= e.target.getAttribute('data-name')))
    }

    function addSubject(value){
        setSubjectListLocal([...subjectListLocal, value])
    }

    function deleteSubject(e){
        setSubjectListLocal(subjectListLocal.filter(item => item!= e.target.getAttribute('data-name')))
    }

    function hideSubjectSuggestions(){
        document.getElementsByClassName('subject-suggestions')[0].style.display="none"
    }

    function hideTeacherSuggestions(){
        document.getElementsByClassName('teacher-suggestions')[0].style.display="none"
    }


    useEffect(()=>{
    },[teacherListLocal, subjectListLocal])

    useEffect(()=>{
        if(document.getElementById('subjects-list').value){
            document.getElementsByClassName('subject-suggestions')[0].style.display="block"
        }
        else{
            document.getElementsByClassName('subject-suggestions')[0].style.display="none"
        }

        if(document.getElementById('teachers-list').value){
            document.getElementsByClassName('teacher-suggestions')[0].style.display="block"
        }
        else{
            document.getElementsByClassName('teacher-suggestions')[0].style.display="none"
        }
    },[subjectListFetched, teacherListFetched])

    function getSubjects(searchQuery) {
        fetch(`http://localhost:3000/subjects?q=`+searchQuery, {
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
        fetch(`http://localhost:3000/subjects?q=`+searchQuery, {
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


    function submitForm(){
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
            fetch('http://localhost:3000/class/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   class_name: className,
                   subjects: subjectListLocal,
                   teachers: teacherListLocal
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

    function showNotifSuccess(){
        document.getElementById("notif-success").style.display="block";
    }

    function showNotifFailed(){
        document.getElementById("notif-failed").style.display="block";
    }

    function closeNotif(){
        document.getElementById("notif-success").style.display="none";
        document.getElementById("notif-failed").style.display="none";
    }

    return (
        <>
        <div className="form-container">
            <span className="form-title">Create New Class</span>
            <div className="form-field-container">
                <label className="form-field-label">Class Name</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Teachers</label>
                <input className="form-field form-field-2" type="text" id="teachers-list" />
                <div className="teacher-suggestions">
                    {subjectListFetched.map((item)=>{
                      return <span className="teacher-suggestions-item" data-id={item._id} onClick={e=> {addTeacher(e.target.innerText);hideTeacherSuggestions()}}>{item.subject_name}</span>
                    })}
                </div>
                <div className="bubble-list">
                    {teacherListLocal.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteTeacher(e);}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Subjects</label>
                <input className="form-field form-field-2" type="text"id="subjects-list" onChange={e=>{e.preventDefault();getSubjects(e.target.value)}} />
                <div className="subject-suggestions">
                    {subjectListFetched.map((item)=>{
                      return <span className="subject-suggestions-item" data-id={item._id} onClick={e=> {addSubject(e.target.innerText);hideSubjectSuggestions()}}>{item.subject_name}</span>
                    })}
                </div>
                <div className="bubble-list">
                    {subjectListLocal.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteSubject(e)}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <button className="submit-button" onClick={submitForm}>SUBMIT</button>
        </div>
        <div className="notif-component-success"id="notif-success">
            <label className="notif-component-text">Success!</label>
            <br/>
            <label className="notif-component-message">Class added.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>

        <div className="notif-component-failed" id="notif-failed">
            <label className="notif-component-text">Failed!</label>
            <br/>
            <label className="notif-component-message">Error occured, try again.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>
        </>
    )
}

export default AddClass;