import React from "react";
import { useState, useEffect } from 'react';
import "./class-form.css"



function ClassForm(){

    const [classData, setClassData] = useState('');
    const [classTeacher, setClassTeacher] = useState('');

    function addClassData(){
        var validated = 1;
        if (!classData) {
            validated = 0;
            document.getElementById('class').style.border = "1px solid red";
        }

        if (!classTeacher) {
            validated = 0;
            document.getElementById('class-teacher').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    class_name:classData,
                    class_teacher_id:classTeacher
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                    }

                    else {
                        alert("Failed. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }
    return(<div className="class-screen">
        <div className="class-container">
            <div className="form-row">
            <label className="form-label">Class</label>
            <input className="form-input-field" placeholder="Enter a new class" id="class" onChange={e=>{e.preventDefault(); setClassData(e.target.value)}}></input>
            </div>
            <div className="form-row">
            <label className="form-label">Class Teacher</label>
            <input className="form-input-field" placeholder="Enter class Teacher" id="class-teacher" onChange={e=>{e.preventDefault(); setClassTeacher(e.target.value)}}></input>
            </div>
            <div className="form-button-container">
            <button className="form-button" onClick={addClassData}>Submit</button>
            </div>
        </div>
    </div>)
}

export default ClassForm;