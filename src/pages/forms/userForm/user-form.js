import React from "react";
import { useState, useEffect } from 'react';
import "./user-form.css"



function UserForm(){

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [role_id, setRole_id] = useState('');
    const [role_name, setRole_name] = useState('');

    //state to store roles to populate on frontend
    const [roleDispData, setRoleDispData]=useState('');

    function validateData(){
        var validated = 1;
        if (!first_name) {
            validated = 0;
            document.getElementById('user-first-name').style.border = "1px solid red";
        }

        if (!last_name) {
            validated = 0;
            document.getElementById('user-last-name').style.border = "1px solid red";
        }

        if (!mobile) {
            validated = 0;
            document.getElementById('user-mobile').style.border = "1px solid red";
        }

        if (!email) {
            validated = 0;
            document.getElementById('user-email').style.border = "1px solid red";
        }

        if (!userPassword) {
            validated = 0;
            document.getElementById('user-password').style.border = "1px solid red";
        }


        if (validated == 1) {
           

        }
    }

    
    return(<div className="user-screen">
        <div className="user-container">
            <div className="form-row-dual">
                <div className="form-row-dual-cell">
                    <label className="form-label">First Name</label>
                    <input className="form-input-field" placeholder="Enter first name" id="user-first-name" onChange={e=>{e.preventDefault(); setFirst_name(e.target.value)}}></input>
                </div>
                <div className="form-row-dual-cell">
                    <label className="form-label">Last Name</label>
                    <input className="form-input-field" placeholder="Enter last name" id="user-last-name" onChange={e=>{e.preventDefault(); setLast_name(e.target.value)}}></input>
                </div>
            </div>
            <div className="form-row-dual">
                <div className="form-row-dual-cell">
                    <label className="form-label">Mobile</label>
                    <input className="form-input-field" placeholder="Enter mobile number" id="user-mobile-number" onChange={e=>{e.preventDefault(); setMobile(e.target.value)}}></input>
                </div>
                <div className="form-row-dual-cell">
                    <label className="form-label">Email</label>
                    <input className="form-input-field" placeholder="Enter Email ID" id="user-email" onChange={e=>{e.preventDefault(); setEmail(e.target.value)}}></input>
                </div>
            </div>
            <div className="form-row">
            <label className="form-label">Password</label>
            <input className="form-input-field" placeholder="Enter a password" id="user-password" onChange={e=>{e.preventDefault(); setUserPassword(e.target.value)}}></input>
            </div>
            <div className="form-row">
            <label className="form-label">Role</label>
            <select>
                <option value="student" data-role-id="">Student</option>
                <option value="teacher" data-role-id="">Teacher</option>
                <option value="admin" data-role-id="">Admin</option>
                <option value="super admin" data-role-id="">Super Admin</option>
            </select>
            </div>
            <div className="form-button-container">
            <button className="form-button" onClick={validateData}>Submit</button>
            </div>
        </div>
    </div>)
}

export default UserForm;