import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./view-teacher.css"


function ViewTeacher(props) {

    const { id } = useParams();

    const [teacherData, setTeacherData] = useState('');

    useEffect(() => {

        fetch('http://localhost:3000/users/' + id, {
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
    }, []);

    if (!teacherData) {

        return (
            <div className="view-teacher">
                Loading......
        </div>
        )
    }

    else {

        return (
            <div className="screen-main">
                <img src="/bg-2.png" className="bg-img-1" />
                <img src="/bg-4.png" className="bg-img-2" />
                <img src="/bg-1.png" className="bg-img-3" />
                <img src="/bg-3.png" className="bg-img-4" />
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
            </div>

        )
    }
}

export default ViewTeacher;