import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-branch.css"


function ViewBranch(props) {

    const {id} = useParams()

    const [branchData, setBranchData] = useState('');
    const [updatedBranchName, setUpdatedBranchName]= useState('');
    const [updatedBranchCode, setUpdatedBranchCode]= useState('');
    const [updatedBranchAdd, setUpdatedBranchAdd]= useState('');


    useEffect(()=>{

        fetch('http://localhost:3000/branches/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setBranchData(data)
                        console.log(branchData);
                        setUpdatedBranchName(data.branch_name)
                        setUpdatedBranchCode(data.branch_code)
                        setUpdatedBranchAdd(data.address);
                        //document.getElementsByClassName('view-student')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    },[]);

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

    function updateBranch(){
        var validated = 1;
            if (!updatedBranchName) {
                validated = 0;
                document.getElementById('edit-branch-name').style.border = "1px solid red";
            }
            if (!updatedBranchCode) {
                validated = 0;
                document.getElementById('edit-branch-code').style.border = "1px solid red";
            }
            if (!updatedBranchAdd) {
                validated = 0;
                document.getElementById('edit-branch-add').style.border = "1px solid red";
            }
    
            if (validated == 1) {
                fetch(`http://localhost:3000/branches/${id}/update`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        branch_code: updatedBranchCode,
                        branch_name: updatedBranchName,
                        address: updatedBranchAdd
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message != "failed") {
                            console.log(data)
                            showNotifSuccess();
                        }
    
                        else {
                            showNotifFailed();
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        showNotifFailed();
                    });
                }
    }

   if(!branchData){
       return(<div>Loading</div>)
   }
   else{
    return (
        <>
        <div className="view-student">
            <label className="view-student-heading"><b>Branch Details</b></label>
            <table>
            <tr>
                  <td><b>Branch Code</b></td>
                  <td><input className="form-field" id="edit-branch-code" type="text" defaultValue={updatedBranchCode} onChange={e=>{e.preventDefault(); setUpdatedBranchCode(e.target.value);}}></input></td>
                  <button className="submit-button edit-button"  id="edit-btn" onClick={updateBranch}>Update</button>
              </tr>
              <tr>
                  <td><b>Branch Name</b></td>
                  <td><input className="form-field" id="edit-branch-name" type="text" defaultValue={updatedBranchName} onChange={e=>{e.preventDefault(); setUpdatedBranchName(e.target.value);}}></input></td>
                  <button className="submit-button edit-button"  id="edit-btn" onClick={updateBranch}>Update</button>
              </tr>
              <tr>
                  <td><b>Branch Address</b></td>
                  <td><input className="form-field" id="edit-branch-add" type="text" defaultValue={updatedBranchAdd} onChange={e=>{e.preventDefault(); setUpdatedBranchAdd(e.target.value);}}></input></td>
                  <button className="submit-button edit-button"  id="edit-btn" onClick={updateBranch}>Update</button>
              </tr>
            </table>
        </div>
        <div className="notif-component-success"id="notif-success">
            <label className="notif-component-text">Success!</label>
            <br/>
            <label className="notif-component-message">Operation done.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>

        <div className="notif-component-failed" id="notif-failed">
            <label className="notif-component-text">Failed!</label>
            <br/>
            <label className="notif-component-message">Error occured, try again.</label>
            <img src="icons8-macos-close-60.png" className="notif-closeIcon" onClick={closeNotif}/>
        </div>
        </>
    )
   }
}

export default ViewBranch;