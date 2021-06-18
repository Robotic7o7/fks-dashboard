import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-performance.css"


function ViewPerformance() {

    //     const [posts, setPosts] = useState([])
    // const [searchQuery, setSearchQuery] = useState('')
    // const [updatePwdID, setUpdatePwdId] = useState('')
    // const [updatedPass, setUpdatedPass] = useState('')

    // function getPosts(){
    //     fetch(`http://165.22.210.235:4000/posts`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setPosts(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }

    //  useEffect(() => {
    //      getPosts()

    //  }, [])


    // function showUpdatePwd(){
    //     document.getElementById("pwd-update").style.display="block";
    // }

    // function hideUpdatePwd(){
    //     document.getElementById("pwd-update").style.display="none";
    // }

    // function showNotifSuccess(){
    //     document.getElementById("notif-success").style.display="block";
    // }

    // function showNotifFailed(){
    //     document.getElementById("notif-failed").style.display="block";
    // }

    // function closeNotif(){
    //     document.getElementById("notif-success").style.display="none";
    //     document.getElementById("notif-failed").style.display="none";
    // }


    // function updatePassword(){
    //     var validated = 1;
    //     if (!updatedPass) {
    //         validated = 0;
    //         document.getElementById('updated-pass').style.border = "1px solid red";
    //     }

    //     if (validated == 1) {
    //         fetch(`http://165.22.210.235:4000/users/${updatePwdID}/update`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 password: updatedPass
    //             }),
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.message != "failed") {
    //                     console.log(data)
    //                     showNotifSuccess();
    //                 }

    //                 else {
    //                     showNotifFailed();
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //                 showNotifFailed();
    //             });

    //     }
    //     hideUpdatePwd();
    // }

    return (
        <div className="view-performance">
            <div className="performance-table-container">
                <span className="performance-table-heading">English</span>
                <table class="performance-table">
                    <tr>
                        <th>Assignment Name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Assignment 1</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 2</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 3</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 4</td>
                        <td>A</td>
                    </tr>
                </table>
            </div>
            <div className="performance-table-container">
                <span className="performance-table-heading">Maths</span>
                <table class="performance-table">
                    <tr>
                        <th>Assignment Name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Assignment 1</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 2</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 3</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignment 4</td>
                        <td>A</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ViewPerformance;