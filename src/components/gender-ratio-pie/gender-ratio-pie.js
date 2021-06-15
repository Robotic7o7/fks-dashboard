import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from "react-chartjs-2";
import './gender-ratio-pie.css';
import { chartColors } from "./colors";

function GenderRatioPie() {
    let chartInstance = null;

    const options = {
        legend: {
            display: false,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };

    const pieOptions = {
        legend: {
            display: false,
            position: "right",
            legendCallback: function (chart) {
                // Return the HTML string here.
                console.log(chart);
                return [
                    <ul>
                        <li>z</li>
                        <li>zzzz</li>
                        <li>ppp</li>
                        <li>adasda</li>
                    </ul>
                ];
            }
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };

    const pieData = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["male", "female"],
        datasets: [
            {
                data: [50, 60],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors
            }
        ]
    };

    return (
        <div className="gender-ratio-pie">
            <div className="pie-container">
                <Pie
                    data={pieData}
                    options={pieOptions}
                    ref={input => {
                        chartInstance = input;
                    }}
                />
            </div>
        </div>
    );
}

export default GenderRatioPie;