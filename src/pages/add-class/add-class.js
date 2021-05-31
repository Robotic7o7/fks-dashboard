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

    return (
        <div className="form-container">
            <span className="form-title">Create New Class</span>
            <div className="form-field-container">
                <label className="form-field-label">Class Name</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Teachers</label>
                <input className="form-field form-field-2" type="text" />
                <button className="submit-button add-button" onClick={e=>{e.preventDefault();addTeacher(e)}}>ADD</button>
                <div className="bubble-list">
                    {teacherList.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteTeacher(e);}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Students</label>
                <input className="form-field form-field-2" type="text" />
                <button className="submit-button add-button" onClick={e=>{e.preventDefault();addStudent(e)}}>ADD</button>
                <div className="bubble-list">
                    {studentList.map((item)=>{
                       return <span className="bubble-list-item" data-name={item} onClick={e=>{e.preventDefault();deleteStudent(e)}}>{item} <span className="bubble-list-item-delete">x</span></span>
                    })}
                </div>
            </div>
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default AddClass;