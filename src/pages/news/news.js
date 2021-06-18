import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./news.css"


function News() {

     const [posts, setPosts] = useState([])
    // const [searchQuery, setSearchQuery] = useState('')
    // const [updatePwdID, setUpdatePwdId] = useState('')
    // const [updatedPass, setUpdatedPass] = useState('')

    function getPosts(){
        fetch(`http://165.22.210.235:4000/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

     useEffect(() => {
         getPosts()

     }, [])


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
        <div className="news">
            <span className="news-title">Latest News</span>
            {posts.map((item) => {
                return (
                    <div className="news-item">
                    <div className="news-item-user-details">
                    <svg className="news-item-user-img" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                        <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.434,17.434,0,0,0,17.438.563Zm0,6.75A6.188,6.188,0,1,1,11.25,13.5,6.188,6.188,0,0,1,17.438,7.313Zm0,24.188a13.474,13.474,0,0,1-10.3-4.8,7.839,7.839,0,0,1,6.926-4.2,1.72,1.72,0,0,1,.5.077,9.309,9.309,0,0,0,2.876.485,9.274,9.274,0,0,0,2.876-.485,1.72,1.72,0,0,1,.5-.077,7.839,7.839,0,0,1,6.926,4.2A13.474,13.474,0,0,1,17.438,31.5Z" transform="translate(0 -0.563)" />
                    </svg>
                        <span className="news-item-user-name">{item.user.name}</span>
                    </div>
                    <div className="news-item-text">{item.post_text}</div>
                    <div className="news-item-time">{(new Date(item.date)).toString()}</div>
                </div>
    
                )
            })}
        </div>
    )
}

export default News;