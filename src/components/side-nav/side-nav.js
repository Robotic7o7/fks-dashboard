import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './side-nav.css';

function SideNav() {
    return (
        <div className="side-nav">
            <Link to="/login" className="side-nav-item">login</Link>
            <Link to="/add-subject" className="side-nav-item">add-subject</Link>
            <Link to="/add-class" className="side-nav-item">add-class</Link>
            <Link to="/add-student" className="side-nav-item">add-student</Link>
            <Link to="/add-teacher" className="side-nav-item">add-teacher</Link>
            <Link to="/add-assignment" className="side-nav-item">add-assignment</Link>
            <Link to="/view-assignment-list" className="side-nav-item">view-assignment-list</Link>
            <Link to="/view-admin-list" className="side-nav-item">view-admin-list</Link>
            <Link to="/view-student-list" className="side-nav-item">view-student-list</Link>
            <Link to="/view-teacher-list" className="side-nav-item">view-teacher-list</Link>

        </div>
    );
}

export default SideNav;