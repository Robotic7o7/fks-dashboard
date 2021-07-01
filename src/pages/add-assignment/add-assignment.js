import React from "react";
import { useEffect, useState } from "react";
import "./add-assignment.css"

function AddAssignment() {

    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentCategory, setAssignmentCategory] = useState('');
    const [assignmentDueDate, setAssignmentDueDate] = useState('');
    const [isGraded, setIsGraded] = useState('');
    const [assignmentSubject, setAssignmentSubject] = useState('');
    const [assignmentSubjectId, setAssignmentSubjectId] = useState('');
    const [subjectListFetched, setSubjectListFetched] = useState([])
    const [studentListFetched, setStudentListFetched] = useState([])
    const [studentListLocal, setStudentListLocal] = useState([])
    const [studentListId, setStudentListId] = useState([])
    const [classListFetched, setClassListFetched] = useState([])
    const [classListLocal, setClassListLocal] = useState([])
    const [classListId, setClassListId] = useState([])

    function addQuestion(e) {
        var addAssignmentForm = document.getElementById('add-assignment-form')

        var questionContainer = document.createElement('div');
        questionContainer.setAttribute('class', 'question-container')

        var formFieldContainer = document.createElement('div')
        formFieldContainer.setAttribute('class', 'form-field-container')

        var formFieldContainer1 = document.createElement('div')
        formFieldContainer.setAttribute('class', 'form-field-container')

        formFieldContainer1.innerHTML = `
        <label class="form-field-label">Question</label>
        <input class="form-field assignment-question-text-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer1)

        var formFieldContainer2 = document.createElement('div')
        formFieldContainer.setAttribute('class', 'form-field-container')

        formFieldContainer2.innerHTML = `
        <label class="form-field-label">Marks</label>
        <input class="form-field assignment-question-marks-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer2)

        var formFieldContainer3 = document.createElement('div')
        formFieldContainer3.setAttribute('class', 'form-field-container')

        formFieldContainer3.innerHTML = `
        <label class="form-field-label">Question Type</label>
        <input class="form-field assignment-question-type-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer3)

        var formFieldContainer4 = document.createElement('div')
        formFieldContainer4.setAttribute('class', 'form-field-container')

        formFieldContainer4.innerHTML = `
        <label class="form-field-label">Option 1</label>
        <input class="form-field assignment-question-option1-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer4)

        var formFieldContainer5 = document.createElement('div')
        formFieldContainer5.setAttribute('class', 'form-field-container')

        formFieldContainer5.innerHTML = `
        <label class="form-field-label">Option 2</label>
        <input class="form-field assignment-question-option2-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer5)

        var formFieldContainer6 = document.createElement('div')
        formFieldContainer6.setAttribute('class', 'form-field-container')

        formFieldContainer6.innerHTML = `
        <label class="form-field-label">Option 3</label>
        <input class="form-field assignment-question-option3-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer6)

        var formFieldContainer7 = document.createElement('div')
        formFieldContainer7.setAttribute('class', 'form-field-container')

        formFieldContainer7.innerHTML = `
        <label class="form-field-label">Option 4</label>
        <input class="form-field assignment-question-option4-form-field" type="text" />`

        questionContainer.appendChild(formFieldContainer7)

        addAssignmentForm.insertBefore(questionContainer, document.getElementsByClassName('submit-button')[0])
    }

    function getSubjects(searchQuery) {
        fetch(`http://localhost:3000/subjects?q=` + searchQuery, {
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

    function getStudents(searchQuery) {
        fetch(`http://localhost:3000/users/students?q=` + searchQuery, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setStudentListFetched(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function getClasses(searchQuery) {
        fetch(`http://localhost:3000/classes?q=` + searchQuery, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setClassListFetched(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function addClass(e) {
        setClassListLocal([...classListLocal, e.target.innerText])
        setClassListId([...classListId, e.target.getAttribute('data-id')])
    }

    function deleteClass(e) {
        console.log(e.target)
        console.log(e.target.getAttribute("data-name"))
        setClassListLocal(classListLocal.filter(item => item != e.target.getAttribute('data-name')))
    }

    function addStudent(e) {
        setStudentListLocal([...studentListLocal, e.target.innerText])
        setStudentListId([...studentListId, e.target.getAttribute('data-id')])
    }

    function deleteStudent(e) {
        console.log(e.target)
        console.log(e.target.getAttribute("data-name"))
        setStudentListLocal(studentListLocal.filter(item => item != e.target.getAttribute('data-name')))
    }

    function hideClassSuggestions() {
        document.getElementsByClassName('class-suggestions')[0].style.display = "none"
    }

    function hideStudentSuggestions() {
        document.getElementsByClassName('student-suggestions')[0].style.display = "none"
    }

    function hideSubjectSuggestions() {
        document.getElementsByClassName('subject-suggestions')[0].style.display = "none"
    }

    function addAssignment() {

        var questionObj = ""
        for (var i = 0; i < document.getElementsByClassName('question-container').length; i++) {
            if (i == 0)
                questionObj = "["
            questionObj = questionObj + `{
                "question_text":"${document.getElementsByClassName('assignment-question-text-form-field')[i] ? document.getElementsByClassName('assignment-question-text-form-field')[i].value : ""}",
                "question_type":"${document.getElementsByClassName('assignment-question-type-form-field')[i] ? document.getElementsByClassName('assignment-question-type-form-field')[i].value : ""}",
                "marks":"${document.getElementsByClassName('assignment-question-marks-form-field')[i] ? document.getElementsByClassName('assignment-question-marks-form-field')[i].value : ""}",
                "option1":"${document.getElementsByClassName('assignment-question-option1-form-field')[i] ? document.getElementsByClassName('assignment-question-option1-form-field')[i].value : ""}",
                "option2":"${document.getElementsByClassName('assignment-question-option2-form-field')[i] ? document.getElementsByClassName('assignment-question-option2-form-field')[i].value : ""}",
                "option3":"${document.getElementsByClassName('assignment-question-option3-form-field')[i] ? document.getElementsByClassName('assignment-question-option3-form-field')[i].value : ""}",
                "option4":"${document.getElementsByClassName('assignment-question-option4-form-field')[i] ? document.getElementsByClassName('assignment-question-option4-form-field')[i].value : ""}"
            }`

            if (i != document.getElementsByClassName('question-container').length - 1) {
                questionObj = questionObj + ","
            }

            if (i == document.getElementsByClassName('question-container').length - 1)
                questionObj = questionObj + "]"

        }

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
            fetch('http://localhost:3000/assignments/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assignment_name: assignmentName,
                    assignment_type: assignmentCategory,
                    due_date: assignmentDueDate,
                    is_graded: isGraded,
                    class_list: classListId,
                    student_list: studentListId,
                    subject: assignmentSubjectId,
                    questions: JSON.parse(questionObj)
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        clearInput()
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

        }
    }

    useEffect(() => {
        if (document.getElementById('class-list').value) {
            document.getElementsByClassName('class-suggestions')[0].style.display = "block"
        }
        else {
            document.getElementsByClassName('class-suggestions')[0].style.display = "none"
        }

        if (document.getElementById('student-list').value) {
            document.getElementsByClassName('student-suggestions')[0].style.display = "block"
        }
        else {
            document.getElementsByClassName('student-suggestions')[0].style.display = "none"
        }

        if (document.getElementById('assignment-subject').value) {
            document.getElementsByClassName('subject-suggestions')[0].style.display = "block"
        }
        else {
            document.getElementsByClassName('subject-suggestions')[0].style.display = "none"
        }

    }, [classListFetched, studentListFetched, subjectListFetched])


    function clearInput() {
        setAssignmentName('')
        setAssignmentCategory('')
        setAssignmentDueDate('')
        setIsGraded('')
        setAssignmentSubject('')
        setAssignmentSubjectId('')
        setSubjectListFetched([])
        setStudentListFetched([])
        setStudentListLocal([])
        setStudentListId([])
        setClassListFetched([])
        setClassListLocal([])
        setClassListId([])
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

<div className="screen-main assignment-length">
            <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/>

            <div className="form-layout" id="add-assignment-form">
                <div className="form-layout-row">
                    <div className="form-layout-70">
                        <div className="form-field-container">
                            <label className="form-field-label">Assignment Name</label>
                            <input className="form-field full-width-field" type="text" id="assignment-name" value={assignmentName} onChange={e => { e.preventDefault(); setAssignmentName(e.target.value) }} />
                        </div>
                    </div>
                    <div className="form-layout-30">
                        <div className="form-field-container">
                            <label className="form-field-label">Category</label>
                            <select className="form-field full-width-field" type="text" id="assignment-category" value={assignmentCategory} onChange={e => { e.preventDefault(); setAssignmentCategory(e.target.value) }}>
                                <option value="PROJECT">Project</option>
                                <option value="ASSIGNMENT">Assignment</option>
                                <option value="HOMEWORK">Homework</option>
                                <option value="EXAM">Exam</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-layout-row">
                    <div className="form-layout-25">
                        <div className="form-field-container">
                            <label className="form-field-label">Due Date</label>
                            <input className="form-field full-width-field" type="date" id="assignment-due-date" value={assignmentDueDate} onChange={e => { e.preventDefault(); setAssignmentDueDate(e.target.value) }} />
                        </div>
                    </div>

                    <div className="form-layout-25">
                        <div className="form-field-container">
                            <label className="form-field-label">Is it graded?</label>
                            <select className="form-field full-width-field" type="text" id="is-graded" value={isGraded} onChange={e => { e.preventDefault(); setIsGraded(e.target.value) }}>
                                <option value="TRUE">Yes</option>
                                <option value="FALSE">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-layout-20">
                        <div className="empty-space"></div>
                    </div>
                    <div className="form-layout-25">
                        <div className="form-field-container">
                            <label className="form-field-label">Class List</label>
                            <input className="form-field" type="text" id="class-list" onChange={e => { e.preventDefault(); getClasses(e.target.value) }} />
                            <div className="class-suggestions">
                                {classListFetched.map((item) => {
                                    return <span className="class-suggestions-item" data-id={item._id} onClick={e => { addClass(e); hideClassSuggestions() }}>{item.class_name}</span>
                                })}
                            </div>
                            <div className="bubble-list">
                                {classListLocal.map((item) => {
                                    return <span className="bubble-list-item" data-name={item} onClick={e => { e.preventDefault(); deleteClass(e); }}>{item} <span className="bubble-list-item-delete">x</span></span>
                                })}
                            </div>
                        </div>
                    </div>

                </div>


                <div className="form-layout-row">
                    <div className="form-layout-25">
                        <div className="form-field-container">
                            <label className="form-field-label">Student List</label>
                            <input className="form-field" type="text" id="student-list" onChange={e => { e.preventDefault(); getStudents(e.target.value) }} />
                            <div className="student-suggestions">
                                {studentListFetched.map((item) => {
                                    return <span className="student-suggestions-item" data-id={item._id} onClick={e => { addStudent(e); hideStudentSuggestions() }}>{item.name}</span>
                                })}
                            </div>
                            <div className="bubble-list">
                                {studentListLocal.map((item) => {
                                    return <span className="bubble-list-item" data-name={item} onClick={e => { e.preventDefault(); deleteStudent(e); }}>{item} <span className="bubble-list-item-delete">x</span></span>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-layout-25">
                        <div className="form-field-container">
                            <label className="form-field-label">Subject</label>
                            <input className="form-field" type="text" id="assignment-subject" value={assignmentSubject} onChange={e => { e.preventDefault(); setAssignmentSubject(e.target.value); getSubjects(e.target.value) }} />
                            <div className="subject-suggestions">
                                {subjectListFetched.map((item) => {
                                    return <span className="subject-suggestions-item" data-id={item._id} onClick={e => { setAssignmentSubject(item.subject_name); setAssignmentSubjectId(item._id); hideSubjectSuggestions() }}>{item.subject_name}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question-container">
                    <div className="form-layout-row">
                        <div className="form-layout-70">
                            <div className="form-field-container">
                                <label className="form-field-label">Question</label>
                                <input className="form-field assignment-question-text-form-field" type="text" />
                            </div>
                        </div>
                        <div className="form-layout-30 layout-stacked">
                            <div className="form-field-container">
                                <label className="form-field-label">Marks</label>
                                <input className="form-field assignment-question-marks-form-field" type="text" />
                            </div>
                            <div className="form-field-container">
                                <label className="form-field-label">Question Type</label>
                                <select className="form-field assignment-question-type-form-field full-width-field" type="text">
                                    <option value="LA">Long Answer</option>
                                    <option value="SA">Short Answer</option>
                                    <option value="MCQ">Multiple Choice</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="form-layout-row layout-stacked">
                        <div className="form-field-container">
                                <label className="form-field-label">Option 1</label>
                                <input className="form-field assignment-question-option1-form-field" type="text" />
                            </div>
                        <div className="form-field-container">
                                <label className="form-field-label">Option 2</label>
                                <input className="form-field assignment-question-option2-form-field" type="text" />
                            </div>
                        <div className="form-field-container">
                                <label className="form-field-label">Option 3</label>
                                <input className="form-field assignment-question-option3-form-field" type="text" />
                            </div>
                        <div className="form-field-container">
                                <label className="form-field-label">Option 4</label>
                                <input className="form-field assignment-question-option4-form-field" type="text" />
                            </div>
                    </div>
                    <div className="form-layout-row">
                        <div className="form-layout-25">
                            <button className="submit-button" onClick={e => { addQuestion(e) }}>Add Another Question</button>
                        </div>
                        <div className="form-layout-25">
                            <button className="submit-button" onClick={addAssignment}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Assignment added.</label>
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

export default AddAssignment;