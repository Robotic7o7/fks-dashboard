import React from "react";
import "./login.css"

function LoginPage() {
    return (
        <div className="form-container">
            <span className="form-title">Login Here</span>
            <div className="form-field-container">
                <label className="form-field-label">User Id</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label">Password</label>
                <input className="form-field" type="password" />
            </div>
            <button className="submit-button">SUBMIT</button>
        </div>
    )
}

export default LoginPage;