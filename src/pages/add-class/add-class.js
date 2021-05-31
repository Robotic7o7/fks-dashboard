import React, { useEffect, useState } from "react";
import "./add-class.css"

function AddClass() {

    const [teacherList, setTeacherList] = useState([])
    const [studentList, setStudentList] = useState([])

    function addTeacher(e){
        setTeacherList([...teacherList, e.target.previousSibling.value])
    }

    function deleteTeacher(e){
        console.log(e.target)
        console.log(e.target.getAttribute("data-name"))
        setTeacherList(teacherList.filter(item => item!= e.target.getAttribute('data-name')))
    }

    function addStudent(e){
        console.log(e.target.previousSibling.value)
        setStudentList([...studentList, e.target.previousSibling.value])
    }

    function deleteStudent(e){
        setStudentList(studentList.filter(item => item!= e.target.getAttribute('data-name')))
    }


    useEffect(()=>{
    },[teacherList, studentList])


    function submitForm(){
        var validated = 1;
        if (!teacherList) {
            validated = 0;
            document.getElementById('teachers-list').style.border = "1px solid red";
        }
        if (!studentList) {
            validated = 0;
            document.getElementById('students-list').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/class/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   
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
            <span className="form-title">Create New Class</span>
            <div className="form-field-container">
                <label className="form-field-label">Class Name</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Teachers</label>
                <input className="form-field form-field-2" type="text" id="teachers-list" />
                <button className="submit-button add-button" onClick={e=>{e.preventDefault();addTeacher(e)}}>ADD</button>
                <div className="bubble-list">
                    {teacherList.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteTeacher(e);}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Students</label>
                <input className="form-field form-field-2" type="text"id="students-list" />
                <button className="submit-button add-button" onClick={e=>{e.preventDefault();addStudent(e)}}>ADD</button>
                <div className="bubble-list">
                    {studentList.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteStudent(e)}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <button className="submit-button" onClick={submitForm}>SUBMIT</button>
        </div>
    )
}

export default AddClass;