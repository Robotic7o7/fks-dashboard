import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./add-news.css"


function AddNews() {

     const [postText, setPostText] = useState('')

    function submitForm(){
        var validated = 1;
        if (!postText) {
            validated = 0;
            document.getElementById('post-text').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://localhost:3000/posts/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   user_id: localStorage.getItem('user_id'),
                   post_text: postText,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        showNotifSuccess()
                    }
    
                    else {
                        showNotifFailed();
                    }
                })
                .catch((error) => {
                    showNotifFailed();
                    console.error('Error:', error);
                });
    
        }
    }


    function showNotifSuccess(){
        document.getElementById("notif-success").style.display="block";
    }

    function showNotifFailed(){
        document.getElementById("notif-failed").style.display="block";
    }

    function closeNotif(){
        document.getElementById("notif-success").style.display="none";
        document.getElementById("notif-failed").style.display="none";
    }

    return (
        <div className="news">
            <span className="news-title">Add News</span>
            <div className="form-field-container">
                <textarea className="form-field post-text-field" id="post-text" value={postText} onChange={e=>{e.preventDefault();setPostText(e.target.value)}}></textarea>    
            </div>
            <button className="submit-button" onClick={submitForm}>SUBMIT</button>

             <div className="notif-component-success"id="notif-success">
            <label className="notif-component-text">Success!</label>
            <br/>
            <label className="notif-component-message">News Posted.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>

        <div className="notif-component-failed" id="notif-failed">
            <label className="notif-component-text">Failed!</label>
            <br/>
            <label className="notif-component-message">Error occured, try again.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>           
        </div>
    )
}

export default AddNews;