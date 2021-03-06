import React, { useState, useEffect } from "react";
import "./login.css"
import { useHistory, Redirect } from 'react-router-dom';

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    function submitForm(){
        var validated = 1;
        if (!email) {
            validated = 0;
            document.getElementById('email').style.border = "1px solid red";
        }

        if (!password) {
            validated = 0;
            document.getElementById('password').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://165.22.210.235:3000/auth/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        localStorage.setItem('authToken', data.token)
                        localStorage.setItem('user_type', data.userType);
                        localStorage.setItem('user_name', data.username);
                        localStorage.setItem('user_id', data.user_id);
                        history.push("/news");
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
       <div className="login-page">
            <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/>
           <div className="login-form-container">
            <span className="form-title">Login Here</span>
            <div className="form-field-container">
                <label className="form-field-label" >Email</label>
                <input className="form-field full-width-field" type="text" id="email" value={email} onChange={e=>{e.preventDefault();setEmail(e.target.value)}}/>
            </div>
            <div className="form-field-container">
                <label className="form-field-label" >Password</label>
                <input className="form-field full-width-field" type="password" id="password" value={password} onChange={e=>{e.preventDefault();setPassword(e.target.value)}} />
            </div>
            <button className="submit-button" onClick={e=>{e.preventDefault();submitForm()}}>SUBMIT</button>
        </div>
           </div>
    )
}

export default LoginPage;