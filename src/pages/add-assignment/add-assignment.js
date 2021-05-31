import React from "react";
import {useState} from "react";
import "./add-assignment.css"

function AddAssignment() {

    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentCategory, setAssignmentCategory] = useState('');
    const [assignmentDueDate, setAssignmentDueDate] = useState('');
    const [isGraded, setIsGraded] = useState('');
    const [classList, setClassList] = useState('');
    const [studentList, setStudentList] = useState('');
    const [assignmentSubject, setAssignmentSubject] = useState('');
    const [questionList, setQuestionList] = useState('');

    function addQuestion(e){
        var addAssignmentForm=document.getElementById('add-assignment-form')

        var questionContainer = document.createElement('div');
        questionContainer.setAttribute('class','question-container')

        var formFieldContainer = document.createElement('div')
        formFieldContainer.setAttribute('class','form-field-container')

        var formFieldContainer1 = document.createElement('div')
        formFieldContainer.setAttribute('class','form-field-container')

        formFieldContainer1.innerHTML=`
        <label class="form-field-label">Question</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer1)

        var formFieldContainer2 = document.createElement('div')
        formFieldContainer.setAttribute('class','form-field-container')

        formFieldContainer2.innerHTML=`
        <label class="form-field-label">Marks</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer2)

        var formFieldContainer3 = document.createElement('div')
        formFieldContainer3.setAttribute('class','form-field-container')

        formFieldContainer3.innerHTML=`
        <label class="form-field-label">Question Type</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer3)

        var formFieldContainer4 = document.createElement('div')
        formFieldContainer4.setAttribute('class','form-field-container')

        formFieldContainer4.innerHTML=`
        <label class="form-field-label">Option 1</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer4)

        var formFieldContainer5 = document.createElement('div')
        formFieldContainer5.setAttribute('class','form-field-container')
        
        formFieldContainer5.innerHTML=`
        <label class="form-field-label">Option 2</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer5)

        var formFieldContainer6 = document.createElement('div')
        formFieldContainer6.setAttribute('class','form-field-container')
        
        formFieldContainer6.innerHTML=`
        <label class="form-field-label">Option 3</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer6)

        var formFieldContainer7 = document.createElement('div')
        formFieldContainer7.setAttribute('class','form-field-container')
        
        formFieldContainer7.innerHTML=`
        <label class="form-field-label">Option 4</label>
        <input class="form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer7)

        addAssignmentForm.insertBefore(questionContainer, document.getElementsByClassName('submit-button')[0])
    }

    function addAssignment(){
        var validated = 1;
        if (!assignmentName) {
            validated = 0;
            document.getElementById('assignment-name').style.border = "1px solid red";
        }

        if (!assignmentCategory) {
            validated = 0;
            document.getElementById('assignment-category').style.border = "1px solid red";
        }

        if (!assignmentDueDate) {
            validated = 0;
            document.getElementById('assignment-due-date').style.border = "1px solid red";
        }

        
        if (!isGraded) {
            validated = 0;
            document.getElementById('is-graded').style.border = "1px solid red";
        }

        if (!assignmentSubject) {
            validated = 0;
            document.getElementById('assignment-subject').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/subjects/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assignment_name:assignmentName,
                    assignment_category:assignmentCategory,
                    assignment_due_date:assignmentDueDate,
                    is_graded:isGraded,
                    assignment_subject:assignmentSubject
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
        <div className="form-container" id="add-assignment-form">
            <span className="form-title">Add New Assignment</span>
            <div className="form-field-container">
                <label className="form-field-label">Assignment Name</label>
                <input className="form-field" type="text" id="assignment-name" value={assignmentName} onChange={e=>{e.preventDefault(); setAssignmentName(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Category</label>
                <input className="form-field" type="text" id="assignment-category" value={assignmentCategory} onChange={e=>{e.preventDefault(); setAssignmentCategory(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Due Date</label>
                <input className="form-field" type="date" id="assignment-due-date" value={assignmentDueDate} onChange={e=>{e.preventDefault(); setAssignmentDueDate(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Is it graded?</label>
                <input className="form-field" type="text" id="is-graded" value={isGraded} onChange={e=>{e.preventDefault(); setIsGraded(e.target.value)}} />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Class List</label>
                <input className="form-field" type="text" id="class-list" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Student List</label>
                <input className="form-field" type="text" id="student-list" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Subject</label>
                <input className="form-field" type="text" id="assignment-subject" value={assignmentSubject} onChange={e=>{e.preventDefault(); setAssignmentSubject(e.target.value)}} />
            </div>
            <div className="question-container">
                <div className="form-field-container">
                    <label className="form-field-label">Question</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Marks</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Question Type</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Option 1</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Option 2</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Option 3</label>
                    <input className="form-field" type="text" />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Option 4</label>
                    <input className="form-field" type="text" />
                </div>
            </div>
            <button className="submit-button" onClick={e=>{addQuestion(e)}}>Add Another Question</button>
            <button className="submit-button" onClick={addAssignment}>SUBMIT</button>
        </div>
    )
}

export default AddAssignment;