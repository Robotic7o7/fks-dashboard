import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './side-nav.css';

function SideNav() {
    function makeActive(e){
        for(var i=0; i<document.getElementsByClassName('side-nav-item').length; i++){
            document.getElementsByClassName('side-nav-item')[i].classList.remove('side-nav-item-selected')
        }

        e.target.classList.add('side-nav-item-selected')
    }
    
    if(localStorage.getItem("user_type")=="STUDENT"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo">Logo</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}>News</Link>
                <Link to="/view-assignment-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Assignments</Link>
                <Link to="/view-performance" className="side-nav-item" onClick={e=>{makeActive(e)}}>Performance</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="TEACHER"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo">Logo</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}>News</Link>
                <Link to="/add-news" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Post</Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Assignment</Link>
                <Link to="/view-assignment-list-t" className="side-nav-item" onClick={e=>{makeActive(e)}}>View Assignments</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>View Students</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="PARENT"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo">Logo</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}>News</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="ADMIN"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/" className="logo">Logo</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}>News</Link>
                <Link to="/add-news" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Post</Link>
                <Link to="/add-subject" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Subject</Link>
                <Link to="/add-class" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Class</Link>
                <Link to="/add-student" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Student</Link>
                <Link to="/add-teacher" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Teacher</Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Assignment</Link>
                <Link to="/add-branch" className="side-nav-item" onClick={e=>{makeActive(e)}}>New Branch</Link>
                <Link to="/view-assignment-list-t" className="side-nav-item" onClick={e=>{makeActive(e)}}>Assignments</Link>
                <Link to="/view-admin-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Admins</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Students</Link>
                <Link to="/view-teacher-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Teachers</Link>
                <Link to="/view-class-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Classes</Link>
                <Link to="/view-subject-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Subjects</Link>
                <Link to="/view-branch-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>Branches</Link>
                <Link to="/gender-ratio-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}>Gender Ratio Data</Link>
                <Link to="/parent-professions-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}>Parent Professions Data</Link>
                <Link to="/birthday-calendar" className="side-nav-item" onClick={e=>{makeActive(e)}}>Birthdays</Link>
                <Link to="/student-residence-map" className="side-nav-item" onClick={e=>{makeActive(e)}}>Pincode Data</Link>
            </div>
        );
    }
}

export default SideNav;