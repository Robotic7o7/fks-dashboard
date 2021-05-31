import React, { useState } from "react";
import "./login.css"

function LoginPage() {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    function submitForm(){

        //validate


        //http

    }

    return (
        <div className="form-container">
            <span className="form-title">Login Here</span>
            <div className="form-field-container">
                <label className="form-field-label" value={userId} onChange={e=>{e.preventDefault();setUserId(e.target.value)}}>User Id</label>
                <input className="form-field" type="text" />
            </div>
            <div className="form-field-container">
                <label className="form-field-label" value={password} onChange={e=>{e.preventDefault();setPassword(e.target.value)}}>Password</label>
                <input className="form-field" type="password" />
            </div>
            <button className="submit-button" onClick={e=>{e.preventDefault();submitForm()}}>SUBMIT</button>
        </div>
    )
}

export default LoginPage;