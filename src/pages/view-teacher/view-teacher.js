import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./view-teacher.css"


function ViewTeacher(props) {

    const {id} = useParams();

    const [teacherData, setTeacherData] = useState('');

    useEffect(()=>{

        fetch('http://localhost:3000/users/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        //document.getElementsByClassName('view-teacher')[0].innerText(data)
                        setTeacherData(data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    },[]);

    if(!teacherData){
        
    return (
        <div className="view-teacher">
            Loading......
        </div>
    )
    }

    else{
        
    return (
        <div className="view-teacher">
             <label className="view-student-heading"><b>Teacher Details</b></label>
            <table>
              <tr>
                  <td><b>Teacher Name</b></td>
                  <td>{teacherData.name}</td>
              </tr>
              <tr>
                  <td><b>Teacher Email</b></td>
                  <td>{teacherData.email}</td>
              </tr>
              <tr>
                  <td><b>Teacher Phone</b></td>
                  <td>{teacherData.phone_number}</td>
              </tr>
              <tr>
                  <td><b>Teacher Branch</b></td>
                  <td>{teacherData.branch}</td>
              </tr>
              <tr>
                  <td><b>Teacher Description</b></td>
                  <td>{teacherData.short_desc}</td>
              </tr>
            </table>
        </div>
    )
    }
}

export default ViewTeacher;