import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./view-subject.css"


function ViewSubject(props) {

    const { id } = useParams()

    const [subjectData, setSubjectData] = useState('');
    const [updatedSub, setUpdatedSub] = useState('');

    useEffect(() => {

        fetch('http://165.22.210.235:3000/subjects/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubjectData(data)
                console.log(subjectData);
                //document.getElementsByClassName('view-student')[0].innerText(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

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

    function updateSubject() {
        var validated = 1;
        if (!updatedSub) {
            validated = 0;
            document.getElementById('edit-sub').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch(`http://165.22.210.235:3000/subjects/${id}/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject_name: updatedSub
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess();
                    }

                    else {
                        showNotifFailed();
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    showNotifFailed();
                });
        }
    }

    if (!subjectData) {
        return (<div>Loading</div>)
    }
    else {
        return (
            <>
                <div className="screen-main">
                    <img src="/bg-2.png" className="bg-img-1" />
                    <img src="/bg-4.png" className="bg-img-2" />
                    <img src="/bg-1.png" className="bg-img-3" />
                    <img src="/bg-3.png" className="bg-img-4" />

                    <div className="view-student">
                        <label className="view-student-heading"><b>Subject Details</b></label>
                        <table>
                            <tr>
                                <td><b>Subject Name</b></td>
                                <td><input className="form-field" id="edit-sub" type="text" defaultValue={subjectData.subject_name} onChange={e => { e.preventDefault(); setUpdatedSub(e.target.value); }}></input></td>
                                <button className="submit-button edit-button" id="edit-btn" onClick={updateSubject}>Update</button>
                            </tr>
                        </table>
                    </div>
                    <div className="notif-component-success" id="notif-success">
                        <label className="notif-component-text">Success!</label>
                        <br />
                        <label className="notif-component-message">Operation done.</label>
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
}

export default ViewSubject;