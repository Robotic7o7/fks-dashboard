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
                <Link to="/home" className="logo"><img src="/fks-logo.png" className="fks-logo"/></Link>
                <Link to="/view-assignment-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-assignment-list</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="TEACHER"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo"><img src="/fks-logo.png" className="fks-logo"/></Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-assignment</Link>
                <Link to="/view-assignment-list-t" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-assignment-list-t</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-student-list</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="PARENT"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/home" className="logo"><img src="/fks-logo.png" className="fks-logo"/></Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-student-list</Link>
            </div>
        );
    }

    if(localStorage.getItem("user_type")=="ADMIN"){
        return (
            <div className="side-nav" id="side-nav">
                <Link to="/" className="logo"><img src="/fks-logo.png" className="fks-logo"/></Link>
                <Link to="/add-subject" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-subject</Link>
                <Link to="/add-class" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-class</Link>
                <Link to="/add-student" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-student</Link>
                <Link to="/add-teacher" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-teacher</Link>
                <Link to="/add-assignment" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-assignment</Link>
                <Link to="/add-branch" className="side-nav-item" onClick={e=>{makeActive(e)}}>add-branch</Link>
                <Link to="/view-assignment-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-assignment-list</Link>
                <Link to="/view-admin-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-admin-list</Link>
                <Link to="/view-student-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-student-list</Link>
                <Link to="/view-teacher-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-teacher-list</Link>
                <Link to="/view-class-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-class-list</Link>
                <Link to="/view-subject-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-subject-list</Link>
                <Link to="/view-branch-list" className="side-nav-item" onClick={e=>{makeActive(e)}}>view-branch-list</Link>
                <Link to="/gender-ratio-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}>gender-ratio-pie</Link>
                <Link to="/parent-professions-pie" className="side-nav-item" onClick={e=>{makeActive(e)}}>parent-professions-pie</Link>
                <Link to="/birthday-calendar" className="side-nav-item" onClick={e=>{makeActive(e)}}>birthday-calendar</Link>
                <Link to="/student-residence-map" className="side-nav-item" onClick={e=>{makeActive(e)}}>student-residence-map</Link>
            </div>
        );
    }
}

export default SideNav;