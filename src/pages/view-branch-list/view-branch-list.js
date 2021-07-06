import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./view-branch-list.css"


function ViewBranchList() {

    const [branchList, setBranchList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function getBranches() {
        fetch(`http://165.22.210.235:3000/branches?q=`+searchQuery, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setBranchList(data)
                console.log(branchList)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getBranches()

    }, [searchQuery])

    function disableBranch(id) {
        fetch(`http://165.22.210.235:3000/branches/${id}/disable`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                    showNotifSuccess()
                    getBranches()
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

    function enableBranch(id) {
        fetch(`http://165.22.210.235:3000/branches/${id}/enable`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                    showNotifSuccess()
                    getBranches()
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

    function deleteBranch(id) {
        fetch(`http://165.22.210.235:3000/branches/${id}/permanent_delete`, {
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
                    getBranches()
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
        <>
         <div className="screen-main">
            <img src="/bg-2.png" className="bg-img-1"/>
            <img src="/bg-4.png" className="bg-img-2"/>
            <img src="/bg-1.png" className="bg-img-3"/>
            <img src="/bg-3.png" className="bg-img-4"/>

            <div className="view-subject-list">
                {/* <div className="teacher-sort-bar">
                   
                    {/* <div className="query-function-container">
           <button className="query-button">Sort Asscending</button>
            <button className="query-button">Sort Descending</button>
            <button className="query-button">Sort Alphabetically</button>
           </div> 
                </div> */}
                <input className="query-field" type="text" onChange={e=>{e.preventDefault();setSearchQuery(e.target.value)}}/>
                    <button className="query-button">Search</button>
                <table>
                    <tr>
                        <th>Branch Code</th>
                        <th>Branch Name</th>
                        <th>Branch Address</th>
                        <th>Options</th>
                    </tr>
                    {branchList.map((item) => {
                        return (
                            <tr>
                                <td>{item.branch_code}</td>
                                <td>{item.branch_name}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link to={"/view-branch/" + item._id} className="action-item">Edit</Link><br />
                                    {item.disable ?
                                        <span className="action-item" onClick={e => { enableBranch(item._id) }}>Enable</span>
                                        :
                                        <span className="action-item" onClick={e => { disableBranch(item._id) }}>Disable</span>}
                                    <br />
                                    <span className="action-item action-item-red" onClick={e => { deleteBranch(item._id) }}>Permanent Delete</span>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
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
        </>
    )
}

export default ViewBranchList;