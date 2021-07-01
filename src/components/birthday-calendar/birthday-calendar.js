import React, { useState, useEffect } from 'react'
import './birthday-calendar.css';

function BirthdayCalendar() {

    var date = new Date()
    const [day, setDate] = useState(date.getUTCDate())
    const [month, setMonth] = useState(date.getUTCMonth() + 1)
    const [year, setYear] = useState(date.getUTCFullYear())

    useEffect(() => {
        document.getElementsByClassName('calendar-table')[0].removeChild(document.getElementById('calendar-days'))

        var tbody = document.createElement('tbody')
        tbody.id = 'calendar-days'
        document.getElementsByClassName('calendar-table')[0].appendChild(tbody)

        function daysInMonth(month, year) {
            let d = new Date(year, month, 0);
            return d.getDate();

        }

        var calendarDays = document.getElementById("calendar-days")
        var tmpDate = new Date(year, month, -daysInMonth(month, year, 0) + 1)
        var dayOfTheWeek = tmpDate.getDay()
        for (var j = 1; j <= daysInMonth(month, year); j = j + 7) {
            var tr = document.createElement('tr')
            tr.className = 'calendar-week';
            var tmpDayOfTheWeek = dayOfTheWeek;
            for (var i = j, k = 0; k < daysInMonth(month, year); i++, k++) {
                if (k > 6) {
                    continue;
                }

                if (i > daysInMonth(month, year)) {
                    break;
                }
                var td = document.createElement('td')
                td.className = 'calendar-day'
                if (dayOfTheWeek > 0) {
                    td.innerHTML = ""
                    if (dayOfTheWeek != 0) {
                        dayOfTheWeek--
                    }
                }
                else {
                    td.id = "day-" + parseInt(i - tmpDayOfTheWeek)
                    td.addEventListener('click', function getTasks(e) {
                        e.preventDefault();

                        var tmpMonth
                        var tmpDate
                        if (parseInt(month) < 10) {
                            tmpMonth = '0' + month
                        }
                        else {
                            tmpMonth = month
                        }
                        if (parseInt(e.target.innerHTML) < 10) {
                            tmpDate = '0' + e.target.innerHTML
                        }
                        else {
                            tmpDate = e.target.innerHTML
                        }
                        var date = year + '-' + tmpMonth + '-' + tmpDate
                        console.log(year + '-' + tmpMonth + '-' + tmpDate)

                    })
                    td.innerHTML = i - tmpDayOfTheWeek
                }
                tr.appendChild(td)
            }
            calendarDays.appendChild(tr)
        }

    }, [month, year])

    function increaseMonth() {
        if (parseInt(month) < 12) {
            setMonth(parseInt(month) + 1)
        }
        else {
            setYear(parseInt(year) + 1)
            setMonth(1)
        }
    }

    function decreaseMonth() {
        if (parseInt(month) > 1) {
            setMonth(parseInt(month) - 1)
        }
        else {
            setYear(parseInt(year) - 1)
            setMonth(12)
        }
    }

    function getMonth() {
        if (month == 1) {
            return 'January'
        }
        if (month == 2) {
            return 'February'
        }
        if (month == 3) {
            return 'March'
        }
        if (month == 4) {
            return 'April'
        }
        if (month == 5) {
            return 'May'
        }
        if (month == 6) {
            return 'June'
        }
        if (month == 7) {
            return 'July'
        }
        if (month == 8) {
            return 'August'
        }
        if (month == 9) {
            return 'September'
        }
        if (month == 10) {
            return 'October'
        }
        if (month == 11) {
            return 'November'
        }
        if (month == 12) {
            return 'December'
        }
        console.log(month)
    }


    return (
        <div className="screen-main">
        <img src="/bg-2.png" className="bg-img-1"/>
        <img src="/bg-4.png" className="bg-img-2"/>
        <img src="/bg-1.png" className="bg-img-3"/>
        <img src="/bg-3.png" className="bg-img-4"/>

        <div>
            < div className="calendar">
                <div className="calender-nav">
                    <div className="calendar-buttons">
                        <button className="calendar-nav-decrease-month" onClick={e => { e.preventDefault(); decreaseMonth() }}>&lt;</button>
                        <span>{getMonth()} ,</span>
                        <span> {year}</span>
                        <button className="calendar-nav-increase-month" onClick={e => { e.preventDefault(); increaseMonth() }}>&gt;</button>
                    </div>
                </div>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>SUN</th>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                        </tr>
                    </thead>
                    <tbody id="calendar-days">

                    </tbody>
                </table>
            </div >
        </div>
        </div>
    );
}

export default BirthdayCalendar;
