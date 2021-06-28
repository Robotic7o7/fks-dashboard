import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./news.css"


function News() {

    const [posts, setPosts] = useState([])
    // const [searchQuery, setSearchQuery] = useState('')
    // const [updatePwdID, setUpdatePwdId] = useState('')
    // const [updatedPass, setUpdatedPass] = useState('')

    function getPosts() {
        fetch(`http://localhost:3000/posts`, {
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

    function deletePost(id) {
        fetch(`http://localhost:3000/posts/${id}/permanent_delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                    showNotifSuccess()
                    getPosts()
                }

                else {
                    showNotifFailed()
                }
            })
            .catch((error) => {
                showNotifFailed()
                console.error('Error:', error);
            });
    }


    function showNotifSuccess() {
        document.getElementById("notif-success").style.display = "block";
    }

    function showNotifFailed() {
        document.getElementById("notif-failed").style.display = "block";
    }

    function closeNotif() {
        document.getElementById("notif-success").style.display = "none";
        document.getElementById("notif-failed").style.display = "none";
    }


    return (
        <div className="news">
            <span className="news-title">Latest News</span>
            {posts.map((item) => {
                return (
                    <div className="news-item">
                        {localStorage.getItem('user_type')=='ADMIN'?(<svg className="news-item-delete-button" onClick={e => { e.preventDefault(); deletePost(item._id) }} xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33">
                            <g id="Icon_feather-trash-2" data-name="Icon feather-trash-2" transform="translate(-3 -1.5)">
                                <path id="Path_31" data-name="Path 31" d="M4.5,9h27" fill="none" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                <path id="Path_32" data-name="Path 32" d="M28.5,9V30a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3V9M12,9V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3V9" fill="none" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                <path id="Path_33" data-name="Path 33" d="M15,16.5v9" fill="none" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                <path id="Path_34" data-name="Path 34" d="M21,16.5v9" fill="none" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                            </g>
                        </svg>):''}

                        <div className="news-item-user-details">
                            <svg className="news-item-user-img" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                                <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.434,17.434,0,0,0,17.438.563Zm0,6.75A6.188,6.188,0,1,1,11.25,13.5,6.188,6.188,0,0,1,17.438,7.313Zm0,24.188a13.474,13.474,0,0,1-10.3-4.8,7.839,7.839,0,0,1,6.926-4.2,1.72,1.72,0,0,1,.5.077,9.309,9.309,0,0,0,2.876.485,9.274,9.274,0,0,0,2.876-.485,1.72,1.72,0,0,1,.5-.077,7.839,7.839,0,0,1,6.926,4.2A13.474,13.474,0,0,1,17.438,31.5Z" transform="translate(0 -0.563)" />
                            </svg>
                            <span className="news-item-user-name">{item.user.name}</span>
                        </div>
                        <div className="news-item-text" dangerouslySetInnerHTML={{ __html: item.post_text }}></div>
                        <div className="news-item-time">{(new Date(item.date)).toString()}</div>
                    </div>

                )
            })}

            <div className="notif-component-success" id="notif-success">
                <label className="notif-component-text">Success!</label>
                <br />
                <label className="notif-component-message">Operation done.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>

            <div className="notif-component-failed" id="notif-failed">
                <label className="notif-component-text">Failed!</label>
                <br />
                <label className="notif-component-message">Error occured, try again.</label>
                <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
            </div>
        </div>
    )
}

export default News;