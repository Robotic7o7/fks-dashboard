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
                <Link to="/home" className="logo">Student Portal</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/news.png" className="side-nav-icon"/>News</Link>
                <Link to="/view-assignment-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/submission.png" className="side-nav-icon"/>Assignments</Link>
                <Link to="/view-performance" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/performance.png" className="side-nav-icon"/>Performance</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="TEACHER"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo">Teacher Portal</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/news.png" className="side-nav-icon"/>News</Link>
                <Link to="/add-news" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/post.png" className="side-nav-icon"/>New Post</Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/assignment.png" className="side-nav-icon"/>New Assignment</Link>
                <Link to="/view-assignment-list-t" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/submission.png" className="side-nav-icon"/>Submissions</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/student-profile.png" className="side-nav-icon"/>Student Details</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="PARENT"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo">Parent Portal</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}>  <img src="/icons/news.png" className="side-nav-icon"/>News</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="ADMIN"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/" className="logo">Admin Portal</Link>
                <Link to="/news" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/news.png" className="side-nav-icon"/>News</Link>
                <Link to="/add-news" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/post.png" className="side-nav-icon"/>New Post</Link>
                <Link to="/add-subject" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/subjects.png" className="side-nav-icon"/>New Subject</Link>
                <Link to="/add-class" className="side-nav-item" onClick={e=>{makeActive(e)}}> <img src="/icons/classes.png" className="side-nav-icon"/>New Class</Link>
                <Link to="/add-student" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/student-profile.png" className="side-nav-icon"/>New Student</Link>
                <Link to="/add-teacher" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/admin.png" className="side-nav-icon"/>New Teacher</Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/assignment.png" className="side-nav-icon"/>New Assignment</Link>
                <Link to="/add-branch" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/pincode.png" className="side-nav-icon"/>New Branch</Link>
                <Link to="/view-assignment-list-t" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/assignment.png" className="side-nav-icon"/>Assignments</Link>
                <Link to="/view-admin-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/admin.png" className="side-nav-icon"/>Admins</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/student-profile.png" className="side-nav-icon"/>Students</Link>
                <Link to="/view-teacher-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/admin.png" className="side-nav-icon"/>Teachers</Link>
                <Link to="/view-class-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/classes.png" className="side-nav-icon"/>Classes</Link>
                <Link to="/view-subject-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/subjects.png" className="side-nav-icon"/>Subjects</Link>
                <Link to="/view-branch-list" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/pincode.png" className="side-nav-icon"/>Branches</Link>
                <Link to="/gender-ratio-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/gender-ratio.png" className="side-nav-icon"/>Gender Ratio Data</Link>
                <Link to="/parent-professions-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/customer.png" className="side-nav-icon"/>Parent Professions Data</Link>
                <Link to="/birthday-calendar" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/birthday-cake.png" className="side-nav-icon"/>Birthdays</Link>
                <Link to="/student-residence-map" className="side-nav-item" onClick={e=>{makeActive(e)}}><img src="/icons/pincode.png" className="side-nav-icon"/>Pincode Data</Link>
            </div>
        );
    }
}

export default SideNav;