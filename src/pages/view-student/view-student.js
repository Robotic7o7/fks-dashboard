import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-student.css"


function ViewStudent(props) {

    const {id} = useParams()

    const [studentData, setStudentData] = useState('');

    useEffect(()=>{

        fetch('http://localhost:3000/users/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setStudentData(data)
                        console.log(studentData);
                        //document.getElementsByClassName('view-student')[0].innerText(data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    },[]);

   if(!studentData){
       return(<div>Loading</div>)
   }
   else{
    return (
        <div className="view-student">
            <label className="view-student-heading"><b>Student Details</b></label>
            <table>
              <tr>
                  <td><b>Student Name</b></td>
                  <td>{studentData.name}</td>
              </tr>
              <tr>
                  <td><b>Student Date of Birth</b></td>
                  <td>{studentData.date_of_birth}</td>
              </tr>
              <tr>
                  <td><b>Student Gender</b></td>
                  <td>{studentData.gender}</td>
              </tr>
              <tr>
                  <td><b>Student Blood group</b></td>
                  <td>{studentData.blood_group}</td>
              </tr>
              <tr>
                  <td><b>Student Email</b></td>
                  <td>{studentData.email}</td>
              </tr>
              <tr>
                  <td><b>Student Branch</b></td>
                  <td>{studentData.branch}</td>
              </tr>
              <tr>
                  <td><b>Student Address</b></td>
                  <td>{studentData.address}</td>
              </tr>
            </table>
        </div>
    )
   }
}

export default ViewStudent;