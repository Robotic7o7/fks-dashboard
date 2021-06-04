import React, { useState } from "react";
import "./login.css"

function LoginPage() {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    function submitForm(){
        var validated = 1;
        if (!userId) {
            validated = 0;
            document.getElementById('username').style.border = "1px solid red";
        }

        if (!password) {
            validated = 0;
            document.getElementById('password').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: userId,
                    password: password
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        localStorage.setItem('authToken', data.token)
                    }

                    else {
                        alert("Invalid credentials. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }

    return (
        <div className="form-container">
            <span className="form-title">Login Here</span>
            <div className="form-field-container">
                <label className="form-field-label" >User Id</label>
                <input className="form-field" type="text" id="username" value={userId} onChange={e=>{e.preventDefault();setUserId(e.target.value)}}/>
            </div>
            <div className="form-field-container">
                <label className="form-field-label" >Password</label>
                <input className="form-field" type="password" id="password" value={password} onChange={e=>{e.preventDefault();setPassword(e.target.value)}} />
            </div>
            <button className="submit-button" onClick={e=>{e.preventDefault();submitForm()}}>SUBMIT</button>
        </div>
    )
}

export default LoginPage;