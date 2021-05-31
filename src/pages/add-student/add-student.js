import React from "react";
import "./add-student.css"

function AddStudent() {
    return (
        <div className="form-container">
            <span className="form-title">Add Student</span>
            <div className="form-field-container">
                <label className="form-field-label">Profile Picture</label>
                <input className="form-field" type="file" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Admission Number</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Fullname</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Date Of Birth</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Gender</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Blood Group</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Email</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">School Branch</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Home Address</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Year Of Joining</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Class Of Joining</label>
                <input className="form-field" type="text" />
            </div>
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default AddStudent;