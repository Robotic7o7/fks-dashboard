import React from "react";
import { useState } from "react";
import "./add-branch.css"


function AddBranch() {

    const [branchCode, setBranchCode] = useState('');
    const [branchName, setBranchName] = useState('');
    const [branchAddress, setBranchAddress] = useState('');

    function submitForm() {
        var validated = 1;
        if (!branchCode) {
            validated = 0;
            document.getElementById('branch-code').style.border = "1px solid red";
        }
        if (!branchName) {
            validated = 0;
            document.getElementById('branch-name').style.border = "1px solid red";
        }
        if (!branchAddress) {
            validated = 0;
            document.getElementById('branch-address').style.border = "1px solid red";
        }
        if (validated == 1) {
            fetch('http://localhost:3000/branches/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    branch_code: branchCode,
                    branch_name: branchName,
                    address: branchAddress
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
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
        setBranchCode('')
        setBranchName('')
        setBranchAddress('')
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
            <div className="form-container">
                <span className="form-title">Add Branch</span>
                <div className="form-field-container">
                    <label className="form-field-label">Branch Name</label>
                    <input className="form-field" type="text" id="branch-name" value={branchName} onChange={e => { e.preventDefault(); setBranchName(e.target.value) }} />
                </div>
                <div className="form-field-container">
                    <label className="form-field-label">Address</label>
                    <input className="form-field" type="text" id="branch-address" value={branchAddress} onChange={e => { e.preventDefault(); setBranchAddress(e.target.value) }} />
                </div>
                <button className="submit-button" onClick={submitForm}>SUBMIT</button>
            </div>
            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Branch added.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>

            <div className="notif-component-failed" id="notif-failed">
                <label className="notif-component-text">Failed!</label>
                <br />
                <label className="notif-component-message">Error occured, try again.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>
        </>
    )
}

export default AddBranch;