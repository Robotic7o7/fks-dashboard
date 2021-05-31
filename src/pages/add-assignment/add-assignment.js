import React from "react";
import "./add-assignment.css"

function AddAssignment() {

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

    return (
        <div className="form-container" id="add-assignment-form">
            <span className="form-title">Add New Assignment</span>
            <div className="form-field-container">
                <label className="form-field-label">Assignment Name</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Category</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Due Date</label>
                <input className="form-field" type="date" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Is it graded?</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Class List</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Student List</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Subject</label>
                <input className="form-field" type="text" />
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
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default AddAssignment;