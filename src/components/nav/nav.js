import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav-left">
            </div>

            <div className="nav-right">
                {/* <span className="nav-item"><svg className="mail-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24">
                    <path id="Icon_material-mail" data-name="Icon material-mail" d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z" transform="translate(-3 -6)" />
                </svg>
                </span>
                <span className="nav-item"><svg className="notification-icon" xmlns="http://www.w3.org/2000/svg" width="22.493" height="28.132" viewBox="0 0 22.493 28.132">
                    <g id="Icon_ionic-ios-notifications" data-name="Icon ionic-ios-notifications" transform="translate(-6.761 -3.93)">
                        <path id="Path_5" data-name="Path 5" d="M17.993,32.063c2.187,0,3.382-1.547,3.382-3.727H14.6C14.6,30.516,15.8,32.063,17.993,32.063Z" />
                        <path id="Path_6" data-name="Path 6" d="M28.969,24.764c-1.083-1.427-3.213-2.264-3.213-8.655,0-6.56-2.9-9.2-5.6-9.83-.253-.063-.436-.148-.436-.415v-.2a1.716,1.716,0,1,0-3.431,0v.2c0,.26-.183.352-.436.415-2.707.64-5.6,3.27-5.6,9.83,0,6.391-2.13,7.221-3.213,8.655A1.4,1.4,0,0,0,8.163,27H27.858A1.4,1.4,0,0,0,28.969,24.764Z" />
                    </g>
                </svg>
                </span> */}
                <Link to="/account" className="nav-item"><svg className="user-icon" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                    <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.434,17.434,0,0,0,17.438.563Zm0,6.75A6.188,6.188,0,1,1,11.25,13.5,6.188,6.188,0,0,1,17.438,7.313Zm0,24.188a13.474,13.474,0,0,1-10.3-4.8,7.839,7.839,0,0,1,6.926-4.2,1.72,1.72,0,0,1,.5.077,9.309,9.309,0,0,0,2.876.485,9.274,9.274,0,0,0,2.876-.485,1.72,1.72,0,0,1,.5-.077,7.839,7.839,0,0,1,6.926,4.2A13.474,13.474,0,0,1,17.438,31.5Z" transform="translate(0 -0.563)" />
                </svg>
                </Link>
            </div>
        </div>
    );
}

export default Nav;