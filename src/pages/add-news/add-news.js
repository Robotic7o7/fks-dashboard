import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "trix/dist/trix";
import { TrixEditor } from "react-trix";
import "./add-news.css"


function AddNews() {

    const [postText, setPostText] = useState('')

    function submitForm() {
        var validated = 1;
        if (!postText) {
            validated = 0;
            document.getElementsByTagName('trix-editor')[0].style.border = "1px solid red";
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
                        clearInput()
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

    function trixHandler(html, text) {
        setPostText(html)
    }

    function clearInput() {
        setPostText('')
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
        <div className="screen-main">
            <img src="/bg-2.png" className="bg-img-1" />
            <img src="/bg-4.png" className="bg-img-2" />
            <img src="/bg-1.png" className="bg-img-3" />
            <img src="/bg-3.png" className="bg-img-4" />
            <div className="add-news">
                <span className="news-title">Add News</span>
                <TrixEditor onChange={trixHandler} />
                <button className="submit-button" onClick={submitForm}>SUBMIT</button>

                <div className="notif-component-success" id="notif-success">
                    <label className="notif-component-text">Success!</label>
                    <br />
                    <label className="notif-component-message">News Posted.</label>
                    <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
                </div>

                <div className="notif-component-failed" id="notif-failed">
                    <label className="notif-component-text">Failed!</label>
                    <br />
                    <label className="notif-component-message">Error occured, try again.</label>
                    <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif} />
                </div>
            </div>
        </div>

    )
}

export default AddNews;