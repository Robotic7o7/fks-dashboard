import React from "react";
import "./add-subject"

function AddSubject() {
    return (
        <div className="form-container">
            <span className="form-title">Add New Subject</span>
            <div className="form-field-container">
                <label className="form-field-label">Subject Name</label>
                <input className="form-field" type="text" />
            </div>
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default AddSubject;