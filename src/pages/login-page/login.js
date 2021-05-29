import React from "react";
import { useState, useEffect } from 'react';
import "./login.css"



function LoginPage(){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        var validated = 1;
        if (!userName) {
            validated = 0;
            document.getElementById('username').style.border = "1px solid red";
        }

        if (!password) {
            validated = 0
            document.getElementById('password').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        localStorage.setItem('authToken', data.token)
                        // window.location.href = "/home"
                    }

                    else {
                        alert("Invalid login credentials. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        
    }
    return(<div className="login-screen">
        <div className="login-container">
            <div className="form-row">
            <label className="form-label">Username</label>
            <input className="form-input-field" id="username" placeholder="Enter Username" onChange={e=>{e.preventDefault(); setUserName(e.target.value)}}></input>
            </div>
            <div className="form-row">
            <label className="form-label">Password</label>
            <input className="form-input-field" id="password" placeholder="Enter Password" type="password" onChange={e=>{e.preventDefault(); setPassword(e.target.value)}}></input>
            </div>
            <div className="form-button-container">
            <button className="form-button" onClick={login}>Submit</button>
            </div>
        </div>
    </div>)
}

export default LoginPage;