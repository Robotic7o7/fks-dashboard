import React from "react";
import "./add-teacher"

function AddTeacher() {
    return (
        <div className="form-container">
            <span className="form-title">Add Teacher</span>
            <div className="form-field-container">
                <label className="form-field-label">Profile Picture</label>
                <input className="form-field" type="file" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Fullname</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Phone Number</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Email Address</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Description</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">School Branch</label>
                <input className="form-field" type="text" />
            </div>
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default AddTeacher;